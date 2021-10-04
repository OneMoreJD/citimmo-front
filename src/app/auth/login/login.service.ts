import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {LoginDto} from './login-dto';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private url: string = environment.domain + environment.urls.login;

  constructor(private http: HttpClient) { }

  submitLogin(loginDto: LoginDto) {
    console.log(loginDto);
    return this.http.post(this.url, loginDto);
  }
}
