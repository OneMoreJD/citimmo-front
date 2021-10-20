import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {
  AddressQueryResult,
  AdvertCreationResult,
  GetFilterResponse,
  ZipOrCityQueryResult
} from '../adverts-creation/advert-creation-dto.model';
import {AdvertsUpdateService} from './adverts-update.service';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {DialogData} from '../../dialog/dialog.model';
import {DialogComponent} from '../../dialog/dialog.component';
import {Advert} from '../advert';
import {Router} from '@angular/router';

@Component({
  selector: 'app-adverts-update',
  templateUrl: './adverts-update.component.html',
  styleUrls: ['./adverts-update.component.css']
})
export class AdvertsUpdateComponent implements OnInit {
  CLOSE_DIALOG_TIMEOUT: number = 5000;
  public readonly baseConstructionDate: Date = new Date('1970-01-01');
  public cityZipCodeSuggestionList: {[key: number]: string} = {};
  public addressSuggestionList: string[];
  public conditionTypeList: string[];
  public transactionTypeList: string[];
  public estateTypeList: string[];
  public statusList: string[];
  public heatingTypeList: string[];

  public updateAdvertForm: FormGroup = this.fb.group({
    title: ['', Validators.required],
    description: ['', Validators.required],
    price: ['', Validators.required],
    rooms: ['', Validators.required],
    bedrooms: ['', Validators.required],
    indoorSurface: ['', Validators.required],
    outdoorSurface: ['', Validators.required],
    parkingQuantity: ['', Validators.required],
    constructionDate: ['', Validators.required],
    conditionType: ['', Validators.required],
    heatingType: ['', Validators.required],
    transactionType: ['', Validators.required],
    estateType: ['', Validators.required],
    address: this.fb.group({
      atNumber: ['', Validators.required],
      street: ['', Validators.required],
      zipcode: ['', Validators.required],
      city: ['', Validators.required]
    })
  });

  public advertDetails: Advert;
  public error: string | null;

  constructor(private fb: FormBuilder, private advertsUpdateService: AdvertsUpdateService, private router: Router, private dialog: MatDialog) { }

  get address(): FormGroup {
    return this.updateAdvertForm.get('address') as FormGroup;
  }

  ngOnInit(): void {
    this.getAdvertDetails(this.router.url);
    this.advertsUpdateService.getConditionTypes().subscribe((data: GetFilterResponse) => this.conditionTypeList = data.data);
    this.advertsUpdateService.getTransactionTypes().subscribe((data: GetFilterResponse) => this.transactionTypeList = data.data);
    this.advertsUpdateService.getStatus().subscribe((data: GetFilterResponse) => this.statusList = data.data);
    this.advertsUpdateService.getEstateTypes().subscribe((data: GetFilterResponse) => this.estateTypeList = data.data);
    this.advertsUpdateService.getHeatingTypes().subscribe((data: GetFilterResponse) => this.heatingTypeList = data.data);
  }

  getAdvertDetails(href: string) {
    return this.advertsUpdateService.getAdvert(href).subscribe(
      (data) => {
        this.advertDetails = data;
        this.updateAdvertForm.get('title').setValue(this.advertDetails.title);
        this.updateAdvertForm.get('description').setValue(this.advertDetails.description);
        this.updateAdvertForm.get('price').setValue(this.advertDetails.price);
        this.updateAdvertForm.get('rooms').setValue(this.advertDetails.rooms);
        this.updateAdvertForm.get('bedrooms').setValue(this.advertDetails.bedrooms);
        this.updateAdvertForm.get('indoorSurface').setValue(this.advertDetails.surfaceIn);
        this.updateAdvertForm.get('outdoorSurface').setValue(this.advertDetails.surfaceOut);
        this.updateAdvertForm.get('constructionDate').setValue(this.advertDetails.contructionDate);
        this.updateAdvertForm.get('parkingQuantity').setValue(this.advertDetails.nbCarInGarage);
        this.updateAdvertForm.get('conditionType').setValue(this.advertDetails.conditionType.name);
        this.updateAdvertForm.get('heatingType').setValue(this.advertDetails.heatingType.name);
        this.updateAdvertForm.get('transactionType').setValue(this.advertDetails.transactionType.name);
        this.updateAdvertForm.get('estateType').setValue(this.advertDetails.estateType.name);
        this.updateAdvertForm.get('address').get('atNumber').setValue(this.advertDetails.address.num);
        this.updateAdvertForm.get('address').get('street').setValue(this.advertDetails.address.street);
        this.updateAdvertForm.get('address').get('zipcode').setValue(this.advertDetails.address.zipCode);
        this.updateAdvertForm.get('address').get('city').setValue(this.advertDetails.address.city);
        console.log(data);
      },
      (err) => {
        this.error = 'Http Status : ' + err.status + ' - ' + err.error;
        console.log(err);
      }
    );
  }

  onSubmit() {
    this.advertDetails.title = this.updateAdvertForm.get('title').value;
    this.advertDetails.description = this.updateAdvertForm.get('description').value;
    this.advertDetails.price = this.updateAdvertForm.get('price').value;

    this.advertsUpdateService.updateAdvert(this.router.url, this.updateAdvertForm.value, this.advertDetails.pictures).subscribe(
      (res) => {
        this.showAdvertUpdateResult(res);
      }
    );
  }

    showAdvertUpdateResult(result: AdvertCreationResult): void {
    let registrationStatus: DialogData;
    if (this.isAdvertUpdateSuccessFull(result)) {
      registrationStatus = {
        dialogType: 'success',
        title: 'Success',
        hasCountdown: true,
        message: result.data
      };
    } else {
      registrationStatus = {
        dialogType: 'error',
        title: 'Failed',
        message: result.data
      };
    }
    let dialogRef : MatDialogRef<DialogComponent> = this.openDialog(registrationStatus);
    if (this.isAdvertUpdateSuccessFull(result)) {
      this.closeDialog(dialogRef, this.CLOSE_DIALOG_TIMEOUT);
    }
  }

  onTypingZipCodeOrCityName(event: KeyboardEvent): void {
    if (event.keyCode !== 8 ){
      const target = event.target as HTMLInputElement;
      if (target.value.length >= 3 ){
        this.advertsUpdateService.searchByZipOrCity(target.value).subscribe(
          res => {
            // console.log('HTTP response', res);
            this.setZipCodeAndCitySuggestionLists(res, target.value);
          },
          err => console.log('HTTP Error', err),
          () => console.log('HTTP request completed.')
        );
      }
    }
  }

  setZipCodeAndCitySuggestionLists(data: ZipOrCityQueryResult, partialvalue: string): void {
    if (data.nhits > 0) {
      this.cityZipCodeSuggestionList = {};
      partialvalue = partialvalue.toUpperCase();
      for (let i = 0; i < data['records'].length; i++) {
        let zipcode: string = data['records'][i]['fields']['code_postal'];
        let cityname: string = data['records'][i]['fields']['nom_de_la_commune'];
        if (zipcode.toUpperCase().startsWith(partialvalue) || cityname.toUpperCase().startsWith(partialvalue)){
          this.cityZipCodeSuggestionList[parseInt(zipcode)] = cityname;
        }
      }
    }
  }

  onZipcodeOrCitySuggestionSelect(value: string, isFromZipField: boolean): void {
    if ( isFromZipField ) {
      this.address.get('city').setValue(this.cityZipCodeSuggestionList[value]);
    } else {
      this.address.get('zipcode').setValue(Object.keys(this.cityZipCodeSuggestionList).find(key => this.cityZipCodeSuggestionList[key] === value));
    }
  }


  onTypingAddress(event: KeyboardEvent): void{
    if (event.keyCode !== 8 ){
      const target = event.target as HTMLInputElement;
      if (target.value.length >= 7){
        let searchQuery: string = target.value.replace(/ /g, '+');
        searchQuery += this.address.get('zipcode').value ? '&postcode=' + this.address.get('zipcode').value : '';
        this.getAddressFromApi(searchQuery, target.value);
      }
    }
  }

  getAddressFromApi(partialAddress: string, partialvalue: string): void {
    this.advertsUpdateService.searchAddress(partialAddress).subscribe(
      res => {
        // console.log('HTTP response', res);
        this.setAddressSuggestionList(res, partialvalue);
      },
      err => console.log('HTTP Error', err),
      () => console.log('HTTP request completed.')
    );
  }

  setAddressSuggestionList(data: AddressQueryResult, partialvalue: string): void {
    this.addressSuggestionList = [];
    partialvalue = partialvalue.toUpperCase();
    if (data['features'].length > 0){
      for (let i = 0; i < data['features'].length; i++){
        let streetName: string = data['features'][i]['properties']['name'];
        streetName.toUpperCase().startsWith(partialvalue) ? this.addressSuggestionList.push(streetName.toUpperCase()) : null;
      }
    }
  }

  private isAdvertUpdateSuccessFull(advertUpdateResult: AdvertCreationResult): boolean {
    return advertUpdateResult.status === 200 ;
  }

  private openDialog(data: DialogData): MatDialogRef<DialogComponent>{
    return this.dialog.open(DialogComponent, {
      data: data,
      height: '200px',
      width: '550px'
    });
  }

  private closeDialog(dialogRef: MatDialogRef<DialogComponent>, timeout: number): void {
    setTimeout(() => {
      dialogRef.close();
    }, timeout);
  }

  cancelUpdate(): void {
    this.router.navigate([this.router.url.replace('/update', '')]);
  }

}
