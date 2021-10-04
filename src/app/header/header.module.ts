import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { NavbarModule } from './navbar/navbar.module';
import { SideNavModule } from './side-nav/side-nav.module';
import { NavbarComponent } from './navbar/navbar.component';
import { SideNavComponent } from './side-nav/side-nav.component';


@NgModule({
  declarations: [
    NavbarComponent,
    SideNavComponent
],
  imports: [
    CommonModule,
    SharedModule,
    NavbarModule,
    SideNavModule

  ],
  exports: [
    NavbarComponent,
    SideNavComponent
 ]

})

export class HeaderModule { }
