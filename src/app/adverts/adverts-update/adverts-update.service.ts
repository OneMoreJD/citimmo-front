import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {
  AddressQueryResult,
  GetFilterResponse,
  ZipOrCityQueryResult
} from '../adverts-creation/advert-creation-dto.model';
import {Advert} from '../advert';
import {tap} from 'rxjs/operators';
import {AdvertUpdateDetails, AdvertUpdateResult} from './advert-update-dto.model';
import {Picture} from '../picture';


@Injectable({
  providedIn: 'root'
})
export class AdvertsUpdateService {

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

  searchByZipOrCity(partialZipOrCity: number|string): Observable<ZipOrCityQueryResult>{
    return this.http.get<ZipOrCityQueryResult>(environment.urls.cityZipCodeSearchApi + partialZipOrCity);
  }

  searchAddress(partialAddress: string): Observable<AddressQueryResult>{
    return this.http.get<AddressQueryResult>(environment.urls.addressSearchApi + partialAddress);
  }

  getAdvert(href: string): Observable<Advert> {
    const url = environment.domain + href.replace('/update', '');
    return this.http.get<any>(url).pipe(
      tap( advert => {
          advert.picturesList = advert.pictures.map( p => p.source);
        }
      )
    );
  }

  updateAdvert(href: string, advertUpdateDetails: AdvertUpdateDetails, advertPictures: Picture[]): Observable<AdvertUpdateResult> {
    const url = environment.domain + href;
    advertUpdateDetails.pictures = advertPictures;
    return this.http.post<AdvertUpdateResult>(url, advertUpdateDetails);
  }
}
