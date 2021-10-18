import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { LocationControlComponent } from './components/location-control/location-control.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogComponent } from '../dialog/dialog.component';
import { GridColsDirective } from './directives/grid-cols.directive';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { CarouselPicturesComponent } from './components/carousel-pictures/carousel-pictures.component';

@NgModule({
  declarations: [
    LocationControlComponent,
    DialogComponent,
    GridColsDirective,
    CarouselPicturesComponent
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
    NgxSliderModule,
    CarouselPicturesComponent
  ]
})
export class SharedModule { }
