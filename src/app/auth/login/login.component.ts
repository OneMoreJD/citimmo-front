import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticateService } from '../authenticate.service';

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

  constructor(private fb: FormBuilder, private authenticateService: AuthenticateService, private router:Router) { }

  ngOnInit(): void {
  }

  toggleShowClearPassword(): void {
    this.showClearPassword = !this.showClearPassword;
  }

  onSubmit() {
    this.error = null;
    this.authenticateService.Login(this.loginForm.value).subscribe(
      (data) => this.router.navigate(['']),
      (err) => {
        this.error = 'Http Status : ' + err.status + ' - ' + err.error;
        console.log(err);
      }
    );
  }
}
