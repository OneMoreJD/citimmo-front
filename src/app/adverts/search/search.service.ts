import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Constants } from 'src/app/shared/constants';
import { environment } from 'src/environments/environment';
import { Criteria } from './criteria';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  adverts: any[];
  advertsChange: Subject<any[]> = new Subject<any[]>();
  criteria;

  constructor(private http: HttpClient) { }

  getEstateTypes() {
    return this.http
      .get(environment.domain + environment.urls.estateTypes)
      .pipe(
        map((data: any[]) => {
          let estates = [];
          data.forEach(element => {
            estates.push({value: element.name, label: element.frLabel})
          });
          return estates;
        }));
  }

  getAdverts(criteria: Criteria): Observable<any> {
    this.criteria = criteria;
    const url = environment.domain + environment.urls.search;
    let params = new HttpParams()
      .set('transactionType', criteria.transactionType)
      .set('locations', criteria.locations.toString()
      );

    if (criteria.estateType && criteria.estateType?.length > 0) {
      params = params.append('estateType', criteria.estateType.toString());
    }
    if (criteria.rooms && criteria.rooms?.length > 0) {
      params = params.append('rooms', criteria.rooms.toString());
    }
    if (criteria.bedrooms && criteria.bedrooms?.length > 0) {
      params = params.append('bedrooms', criteria.bedrooms.toString());
    }

    params = criteria.intSurfaceMin > Constants.MIN_INT_SURFACE ? params.append('intSurfaceMin', criteria.intSurfaceMin.toString()) : params;
    params = criteria.intSurfaceMax < Constants.MAX_INT_SURFACE ? params.append('intSurfaceMax', criteria.intSurfaceMax.toString()) : params;
    params = criteria.extSurfaceMax > Constants.MIN_EXT_SURFACE ? params.append('extSurfaceMax', criteria.extSurfaceMax.toString()) : params;

    if (criteria.transactionType === 'buy') {
      params = criteria.budgetMin > Constants.MIN_BUY_BUDGET ? params.append('budgetMin', criteria.budgetMin.toString()) : params;
      params = criteria.budgetMax < Constants.MAX_BUY_BUDGET ? params.append('budgetMax', criteria.budgetMax.toString()) : params;
    } else {
      params = criteria.budgetMin > Constants.MIN_RENT_BUDGET ? params.append('budgetMin', criteria.budgetMin.toString()) : params;
      params = criteria.budgetMax < Constants.MAX_RENT_BUDGET ? params.append('budgetMax', criteria.budgetMax.toString()) : params;
    }

    return this.http
      .get(url, { params })
      .pipe(map(
        (data: any[]) => this.advertsChange.next(data)
      ));
  }
}
