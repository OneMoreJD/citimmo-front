import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {Advert} from '../advert';
import {map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdvertService {

  constructor(private http: HttpClient) { }

  getAdvert(href: string): Observable<Advert> {
    const url = environment.domain + href;
    // @ts-ignore
    return this.http.get<Advert>(url).pipe(
      tap( advert => {
        if (typeof advert.contructionDate === 'string') {
          advert.contructionDate = new Date(advert.contructionDate);
        }
      }));
  }
}
