import { Injectable } from '@angular/core';
import { RegistrationDetails } from './register-dto.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private url: string = environment.domain + environment.urls.register;

  constructor(private http: HttpClient) { }

  submitRegistration(registrationDetails: RegistrationDetails) {
    registrationDetails.password = this.obfuscateMe(registrationDetails.password);
    console.log(registrationDetails);
    return this.http.post(this.url, registrationDetails);
  }

  private obfuscateMe(value: string): string {
    value = btoa(value);
    let obfuscated: string[] = [];
    return value;
  }

}
