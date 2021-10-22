import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { SideNavComponent } from './side-nav.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    SideNavComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
   exports:[
    SideNavComponent
  ]


})
export class SideNavModule { }
