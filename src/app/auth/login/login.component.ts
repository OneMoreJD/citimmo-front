import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup = this.fb.group({
    username: ['', [Validators.email, Validators.required]],
    password: ['', Validators.required]
  });

  public showClearPassword: boolean;
  public error: string | null;

  constructor(private fb: FormBuilder, private loginService: LoginService) { }

  ngOnInit(): void {
  }

  toggleShowClearPassword(): void {
    this.showClearPassword = !this.showClearPassword;
  }

  onSubmit() {
    this.error = null;
    this.loginService.submitLogin(this.loginForm.value).subscribe(
      (data) => console.log(data),
      (err) => {
        this.error = 'Http Status : ' + err.status + ' - ' + err.error;
        console.log(err);
      }
    );
  }
}
