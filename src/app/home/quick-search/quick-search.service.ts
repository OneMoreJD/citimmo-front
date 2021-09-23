import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuickSearchService {

  constructor(private http: HttpClient) { }

  getAdverts(form: FormGroup): Observable<any> {
    const url = environment.domain + environment.urls.quickSearch;
    const params = new HttpParams()
      .set("transaction", form.controls['transaction'].value)
      .set("location", form.controls['location'].value)
      .set("budget", form.controls['budget'].value);

    const adverts = this.http.get(url, { params });
    return adverts;
  }
}
