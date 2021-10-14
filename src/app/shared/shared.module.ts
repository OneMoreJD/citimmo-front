import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { LocationControlComponent } from './components/location-control/location-control.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogComponent } from '../dialog/dialog.component';
import { GridColsDirective } from './directives/grid-cols.directive';
import { NgxSliderModule } from '@angular-slider/ngx-slider';

@NgModule({
  declarations: [
    LocationControlComponent,
    DialogComponent,
    GridColsDirective
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MaterialModule,
    NgxSliderModule
  ],
  exports: [
    MaterialModule,
    LocationControlComponent,
    CommonModule,
    ReactiveFormsModule,
    DialogComponent,
    GridColsDirective,
    NgxSliderModule
  ]
})
export class SharedModule { }
