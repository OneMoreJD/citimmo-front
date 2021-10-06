import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EstateType } from './advert-creation-dto.model';
import { AdvertCreationService } from './advert-creation.service';

@Component({
  selector: 'app-adverts-creation',
  templateUrl: './adverts-creation.component.html',
  styleUrls: ['./adverts-creation.component.css']
})
export class AdvertsCreationComponent implements OnInit {
  public estateTypeList=EstateType;
  public createAdvertForm : FormGroup = this.fb.group({
    title: ['', Validators.required],
    description: ['', Validators.required],
    price: ['', Validators.required],
    rooms: ['', Validators.required],
    bedrooms: ['', Validators.required],
    indoorSurface: ['', Validators.required],
    outdoroSurface: ['', Validators.required],
    constructionDate: ['', Validators.required],
    parkingQuantity: ['', Validators.required],
    condition: ['', Validators.required],
    status: ['', Validators.required],
    transactionType: ['', Validators.required],
    estateType: ['', Validators.required],
    heatingType: ['', Validators.required],
    location: ['', Validators.required]
  });

  constructor(private fb:FormBuilder, private advertCreationService:AdvertCreationService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.advertCreationService.createAdvert(this.createAdvertForm.value).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );    
  }
  
}
