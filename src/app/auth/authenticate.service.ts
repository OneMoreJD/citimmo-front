import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {LoginDto} from './login/login-dto';
import { map, tap } from 'rxjs/operators';
import jwt_decode from 'jwt-decode';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  private url: string = environment.domain + environment.urls.login;

  logger$ = new BehaviorSubject(false);

  constructor(private http: HttpClient ) { }

  Login(loginDto: LoginDto):Observable<any> {

    return this.http.post<any>(this.url, loginDto).pipe(
      tap(userData => {
        sessionStorage.setItem('username', loginDto.username);
        const tokenStr = 'Bearer ' + userData.token;
        sessionStorage.setItem('token', tokenStr);
        // @ts-ignore
        sessionStorage.setItem('profile', jwt_decode(userData.token).profile);
        this.logger$.next(this.isLogger());
      })
    );

  }

  logout(): void {
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('profile');
    this.logger$.next(this.isLogger());
  }

  isLogger():boolean{
    return  (sessionStorage.getItem('username') != null  && sessionStorage.getItem('token') != null)? true : false;
  }

  getUsername(): string {
    return sessionStorage.getItem('username');
  }
}
