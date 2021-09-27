import { Injectable } from '@angular/core';
import { RegistrationDetails } from './register-dto.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private url:string = "http://localhost:8080/register";

  constructor(private http: HttpClient) { }

  submitRegistration(registrationDetails:RegistrationDetails){    
    registrationDetails.password=this.obfuscateMe(registrationDetails.password);
    //console.log(registrationDetails);
    return this.http.post(this.url, registrationDetails);
  }

  private obfuscateMe(value:string) : string {    
    value = btoa(value);    
    let obfuscated:string[] = [];
    return value;
    /***
    for(let i=0; i<value.length;i++){
      obfuscated.push(Number(value.charCodeAt(i)).toString(16));
    }
    return obfuscated.join("").toString();
     */
  }

}
