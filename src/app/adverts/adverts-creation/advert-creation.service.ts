import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AdvertCreationDetails, GetFilterResponse, ZipOrCityQueryResult, AddressQueryResult, AdvertCreationResult } from './advert-creation-dto.model';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdvertCreationService {

  private readonly createAdvertUrl: string = environment.domain + environment.urls.createAdvert;
  private readonly getConditionTypesUrl: string = environment.domain + environment.urls.conditionTypeFilters;
  private readonly getTransactionTypesUrl: string = environment.domain + environment.urls.transactionTypeFilters;
  private readonly getStatusUrl: string = environment.domain + environment.urls.statusFilters;
  private readonly getEstateTypesUrl: string = environment.domain + environment.urls.estateTypeFilters;
  private readonly getHeatingTypesUrl: string = environment.domain + environment.urls.heatingTypeFilters;
  
  constructor(private http: HttpClient) { }

  getConditionTypes(): Observable<GetFilterResponse>{
    return this.http.get<GetFilterResponse>(this.getConditionTypesUrl);
  }

  getTransactionTypes(): Observable<GetFilterResponse>{
    return this.http.get<GetFilterResponse>(this.getTransactionTypesUrl);
  }

  getStatus(): Observable<GetFilterResponse>{
    return this.http.get<GetFilterResponse>(this.getStatusUrl);
  }

  getEstateTypes(): Observable<GetFilterResponse>{
    return this.http.get<GetFilterResponse>(this.getEstateTypesUrl);
  }

  getHeatingTypes(): Observable<GetFilterResponse>{
    return this.http.get<GetFilterResponse>(this.getHeatingTypesUrl);
  }

  searchByZipOrCity(partialZipOrCity:number|string) : Observable<ZipOrCityQueryResult>{
    return this.http.get<ZipOrCityQueryResult>(environment.urls.cityZipCodeSearchApi+partialZipOrCity);
  }

  searchAddress(partialAddress:string) : Observable<AddressQueryResult>{
    return this.http.get<AddressQueryResult>(environment.urls.addressSearchApi+partialAddress);
  }
  
  createAdvert(advertCreationDetails: AdvertCreationDetails): Observable<AdvertCreationResult> {
    //console.log(advertCreationDetails);
    return this.http.post<AdvertCreationResult>(this.createAdvertUrl, advertCreationDetails);
  }

}
