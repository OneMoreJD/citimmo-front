import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { LocationControlComponent } from './components/location-control/location-control.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GridColsDirective } from './directives/grid-cols.directive';
import { CarouselPicturesComponent } from './components/carousel-pictures/carousel-pictures.component';


@NgModule({
  declarations: [
    LocationControlComponent,
    GridColsDirective,
    CarouselPicturesComponent
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
    GridColsDirective,
    CarouselPicturesComponent
  ]
})
export class SharedModule { }
