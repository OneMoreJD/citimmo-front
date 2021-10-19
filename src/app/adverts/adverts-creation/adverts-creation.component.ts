import { Component, ElementRef, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AddressQueryResult, GetFilterResponse, ZipOrCityQueryResult } from './advert-creation-dto.model';
import { AdvertCreationService } from './advert-creation.service';

@Component({
  selector: 'app-adverts-creation',
  templateUrl: './adverts-creation.component.html',
  styleUrls: ['./adverts-creation.component.css']
})
export class AdvertsCreationComponent implements OnInit {  

  public readonly baseConstructionDate : Date = new Date("1970-01-01"); 
  public cityZipCodeSuggestionList:{[key: number]: string}={};
  public addressSuggestionList:string[];
  public conditionTypeList:string[];
  public transactionTypeList:string[];
  public estateTypeList:string[];
  public statusList:string[];
  public heatingTypeList:string[];

  public createAdvertForm : FormGroup = this.fb.group({
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

    constructor(private fb:FormBuilder, private advertCreationService:AdvertCreationService) { }

  get address():FormGroup{
    return this.createAdvertForm.get("address") as FormGroup;
  }

  ngOnInit(): void {    
    this.advertCreationService.getConditionTypes().subscribe((data: GetFilterResponse) => this.conditionTypeList = data.data);
    this.advertCreationService.getTransactionTypes().subscribe((data: GetFilterResponse) => this.transactionTypeList = data.data);
    this.advertCreationService.getStatus().subscribe((data: GetFilterResponse) => this.statusList = data.data);
    this.advertCreationService.getEstateTypes().subscribe((data: GetFilterResponse) => this.estateTypeList = data.data);
    this.advertCreationService.getHeatingTypes().subscribe((data: GetFilterResponse) => this.heatingTypeList = data.data);
  }

  onSubmit(){
    this.advertCreationService.createAdvert(this.createAdvertForm.value).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );    
  }

  onTypingZipCodeOrCityName(event: KeyboardEvent) : void {
    if(event.keyCode != 8 ){
      const target = event.target as HTMLInputElement;
      if(target.value.length >=3 ){
        this.advertCreationService.searchByZipOrCity(target.value).subscribe(        
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

  setZipCodeAndCitySuggestionLists(data:ZipOrCityQueryResult, partialvalue:string): void{
    if(data.nhits > 0) {
      this.cityZipCodeSuggestionList={};
      partialvalue=partialvalue.toUpperCase();
      for(let i=0; i < data['records'].length; i++) {
        let zipcode:string=data['records'][i]['fields']['code_postal'];
        let cityname:string=data['records'][i]['fields']['nom_de_la_commune']; 
        if(zipcode.toUpperCase().startsWith(partialvalue) || cityname.toUpperCase().startsWith(partialvalue)){
          this.cityZipCodeSuggestionList[parseInt(zipcode)]=cityname;
        }
      }        
    }
  }

  onZipcodeOrCitySuggestionSelect(value:string, isFromZipField:boolean){
    if( isFromZipField ) { 
      this.address.get("city").setValue(this.cityZipCodeSuggestionList[value]);
    } else {
      this.address.get("zipcode").setValue(Object.keys(this.cityZipCodeSuggestionList).find(key => this.cityZipCodeSuggestionList[key] === value));
    }
  }

    
  onTypingAddress(event: KeyboardEvent): void{
    if(event.keyCode != 8 ){
      const target = event.target as HTMLInputElement;
      if(target.value.length >= 7){
        let searchQuery:string=target.value.replace(/ /g,"+");
        searchQuery+=this.address.get("zipcode").value ? '&postcode='+this.address.get("zipcode").value : '';        
        this.getAddressFromApi(searchQuery, target.value);
      }
    }
  }

  getAddressFromApi(partialAddress: string, partialvalue:string):void{
    this.advertCreationService.searchAddress(partialAddress).subscribe(
      res => {
        // console.log('HTTP response', res);
        this.setAddressSuggestionList(res, partialvalue);
      },
      err => console.log('HTTP Error', err),
      () => console.log('HTTP request completed.')                 
    );
  }
  
  setAddressSuggestionList(data:AddressQueryResult, partialvalue:string):void{
    this.addressSuggestionList = [];
    partialvalue=partialvalue.toUpperCase();
    if(data['features'].length > 0){
      for(let i =0; i < data['features'].length; i++){
        let streetName:string=data['features'][i]['properties']['name'];
        streetName.toUpperCase().startsWith(partialvalue) ? this.addressSuggestionList.push(streetName.toUpperCase()) : null;        
      }
    }
  }

}
