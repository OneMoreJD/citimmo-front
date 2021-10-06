import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar.component';

@NgModule({
  declarations: [
  NavbarComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  exports:[
    NavbarComponent
  ]
})
export class NavbarModule { }
