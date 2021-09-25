import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm : FormGroup = this.fb.group({
    username: ['', [Validators.email, Validators.required]],
    password: ['', Validators.required]
  });

  public showClearPassword: boolean;

  constructor(private fb: FormBuilder, private loginService: LoginService) { }

  ngOnInit(): void {
  }

  toggleShowClearPassword(): void {
    this.showClearPassword = !this.showClearPassword;
  }

  onSubmit() {
    this.loginService.submitLogin(this.loginForm.value).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );
  }
}
