import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { NavbarModule } from './navbar/navbar.module';
import { SideNavModule } from './side-nav/side-nav.module';
import { SideNavComponent } from './side-nav/side-nav.component';
import { HeaderComponent } from './header.component';
import { RouterModule } from '@angular/router';
import { ROUTES } from '../app-routing.module';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
],
  imports: [
    CommonModule,
    SharedModule,
    NavbarModule,
    SideNavModule,
    RouterModule.forRoot(ROUTES)
  ],
  exports: [
    RouterModule,
    HeaderComponent
 ]

})

export class HeaderModule { }
