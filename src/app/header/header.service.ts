import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  currentUser: any;

  constructor(private http: HttpClient) { }

  getUser(username: string) {
    const url = environment.domain + environment.urls.user;
    const params = new HttpParams().set('username', username);
    return this.http.get(url, { params })
      .pipe(map((data: any) => {
        this.currentUser = {
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email
        };
        return this.currentUser;
      }));
  }
}
