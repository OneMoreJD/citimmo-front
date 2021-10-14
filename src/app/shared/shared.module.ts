import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { LocationControlComponent } from './components/location-control/location-control.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogComponent } from '../dialog/dialog.component';
import { GridColsDirective } from './directives/grid-cols.directive';

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
    MaterialModule   
  ],
  exports: [
    MaterialModule,
    LocationControlComponent,
    CommonModule,
    ReactiveFormsModule,
    DialogComponent,
    GridColsDirective
  ]
})
export class SharedModule { }
