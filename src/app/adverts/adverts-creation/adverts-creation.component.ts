import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GetFilterResponse } from './advert-creation-dto.model';
import { AdvertCreationService } from './advert-creation.service';

@Component({
  selector: 'app-adverts-creation',
  templateUrl: './adverts-creation.component.html',
  styleUrls: ['./adverts-creation.component.css']
})
export class AdvertsCreationComponent implements OnInit {  

  public readonly baseConstructionDate : Date = new Date("1970-01-01");
  
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
    estateType: ['', Validators.required]
  });

  constructor(private fb:FormBuilder, private advertCreationService:AdvertCreationService) { }

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
  
}
