import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { LocationControlComponent } from './components/location-control/location-control.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GridColsDirective } from './directives/grid-cols.directive';

@NgModule({
  declarations: [
    LocationControlComponent,
    GridColsDirective
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports: [
    MaterialModule,
    LocationControlComponent,
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    GridColsDirective
  ]
})
export class SharedModule { }
