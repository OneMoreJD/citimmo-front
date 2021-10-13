import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Criteria } from './criteria';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  adverts: any[];

  constructor(private http: HttpClient) { }

  getAdverts(criteria: Criteria): Observable<any> {
    const url = environment.domain + environment.urls.search;
    let params = new HttpParams()
      .set('transactionType', criteria.transactionType)
      .set("locations", criteria.locations.toString()
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

    params = criteria.intSurfaceMin > 0 ? params.append('intSurfaceMin', criteria.intSurfaceMin.toString()) : params;
    params = criteria.intSurfaceMax < 200 ? params.append('intSurfaceMax', criteria.intSurfaceMax.toString()) : params;
    params = criteria.extSurfaceMax > 0 ? params.append('extSurfaceMax', criteria.extSurfaceMax.toString()) : params;
    params = criteria.budgetMin > 0 ? params.append('budgetMin', criteria.budgetMin.toString()) : params;
    params = criteria.budgetMax < 1000000 ? params.append('budgetMax', criteria.budgetMax.toString()) : params;

    return this.http
      .get(url, { params })
      .pipe(map(
        data => console.log(data)
      ));
  }
}
