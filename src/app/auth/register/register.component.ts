import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RegisterService } from './register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public registrationForm : FormGroup = this.fb.group({
    firstname: ['', Validators.required],
    lastname: ['', Validators.required],
    email: ['', [Validators.email, Validators.required]],
    phone: [''],
    password: ['', Validators.required]
  });

  public showClearPassword: boolean;

  constructor(private fb:FormBuilder,
              private registerService:RegisterService) { }

  ngOnInit(): void {
  }

  toggleShowClearPassword(){
    this.showClearPassword = !this.showClearPassword;
  }

  onSubmit(){
    this.registerService.submitRegistration(this.registrationForm.value);    
  }

}
