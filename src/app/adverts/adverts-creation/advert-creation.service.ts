import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AdvertCreationDetails, EstateType } from './advert-creation-dto.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdvertCreationService {

  private url: string = environment.domain + environment.urls.createAdvert;
  
  constructor(private http: HttpClient) { }

  createAdvert(advertCreationDetails: AdvertCreationDetails) {
    console.log(advertCreationDetails);
    return this.http.post(this.url, advertCreationDetails);
  }
}
