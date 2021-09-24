import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuickSearchService {

  constructor(private http: HttpClient) { }

  getAdverts(transaction: string, budget: string, locations: string[]): Observable<any> {
    const url = environment.domain + environment.urls.quickSearch;
    const params = new HttpParams()
      .set("transaction", transaction)
      .set("location", locations.toString())
      .set("budget", budget);

    const adverts = this.http.get(url, { params });
    return adverts;
  }
}
