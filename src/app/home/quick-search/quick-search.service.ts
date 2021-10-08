import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuickSearchService {
  criteria: any;
  adverts: any[];

  constructor(private http: HttpClient) { }

  getAdverts(transaction: string, budget: string, locations: string[]): Observable<any> {

    this.criteria = {
      transaction: transaction,
      budget: budget,
      locations: locations
    };
    const url = environment.domain + environment.urls.quickSearch;
    const params = new HttpParams()
      .set("transaction", this.criteria.transaction)
      .set("locations", this.criteria.locations.toString())
      .set("budget", this.criteria.budget);

    const request = this.http.get(url, { params });
    return request;
  }
}
