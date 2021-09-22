import { Injectable } from '@angular/core';
import { RegistrationDetails } from './register-dto.model';
@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor() { }

  submitRegistration(registrationDetails:RegistrationDetails){
    console.log(registrationDetails);
  }
}
