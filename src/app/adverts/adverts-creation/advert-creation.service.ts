import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AdvertCreationDetails, EstateType } from './advert-creation-dto.model';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';

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

  getConditionTypes(): Observable<any>{
    return this.http.get(this.getConditionTypesUrl);
  }

  getTransactionTypes(): Observable<string[]>{
    return this.http.get(this.getTransactionTypesUrl)
    .pipe(
      pluck('data')
    );
  }

  getStatus(): Observable<any>{
    return this.http.get(this.getStatusUrl);
  }

  getEstateTypes(): Observable<any>{
    return this.http.get<EstateType>(this.getEstateTypesUrl);
  }

  getHeatingTypes(): Observable<any>{
    return this.http.get(this.getHeatingTypesUrl);
  }

  createAdvert(advertCreationDetails: AdvertCreationDetails): Observable<any> {
    console.log(advertCreationDetails);
    return this.http.post(this.createAdvertUrl, advertCreationDetails);
  }

}
