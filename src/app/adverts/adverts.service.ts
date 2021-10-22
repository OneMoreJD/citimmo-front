import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthenticateService } from '../auth/authenticate.service';

@Injectable({
  providedIn: 'root'
})
export class AdvertsService {

  constructor(private http: HttpClient, private authService: AuthenticateService) { }

  apply(advert: any): Observable<boolean> {
    const url = environment.domain + environment.urls.apply;
    const body = {
      advertId: advert.id,
      username: this.authService.getUsername()
    };
    return this.http.post(url, body).pipe(map((data: boolean) => {return data}));
  }
}
