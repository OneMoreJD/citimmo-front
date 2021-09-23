import { Injectable } from '@angular/core';
import { RegistrationDetails } from './register-dto.model';
@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor() { }

  submitRegistration(registrationDetails:RegistrationDetails){
    registrationDetails.password = this.obfuscateMe(registrationDetails.password);
    console.log(registrationDetails);
  }

  private obfuscateMe(value:string) : string{
    value = btoa(value);
    let obfuscated:string="";
    for(let i=0; value.length-1;i++){
      obfuscated=obfuscated+Number(value.charAt(i).toString(16));
    }
    return obfuscated;
  }
}
