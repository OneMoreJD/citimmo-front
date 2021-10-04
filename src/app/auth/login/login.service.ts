import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {LoginDto} from './login-dto';
import { map } from 'rxjs/operators';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private url: string = environment.domain + environment.urls.login;

  constructor(private http: HttpClient) { }

  submitLogin(loginDto: LoginDto) {
    console.log(loginDto);
    return this.http.post<any>(this.url, loginDto).pipe(
      map(userData => {
        sessionStorage.setItem('username', loginDto.username);
        const tokenStr = 'Bearer ' + userData.token;
        sessionStorage.setItem('token', tokenStr);
        // @ts-ignore
        sessionStorage.setItem('profile', jwt_decode(userData.token).profile);
        return userData;
      })
    );
  }

}
