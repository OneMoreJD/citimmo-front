import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './login/login.component';
import {AppRoutingModule} from '../app-routing.module';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  declarations: [RegisterComponent, LoginComponent, LogoutComponent],
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule
  ],
  exports:[
  ]
})
export class AuthModule { }
