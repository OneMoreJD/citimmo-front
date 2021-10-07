import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdvertsComponent } from './adverts.component';
import { AdvertsListComponent } from './adverts-list/adverts-list.component';
import { SearchComponent } from './search/search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { RoomsPipe } from './adverts-list/rooms.pipe';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { IntSurfaceSliderPipe } from './search/int-surface-slider.pipe';
import { ExtSurfaceSliderPipe } from './search/ext-surface-slider.pipe';

@NgModule({
  declarations: [
    AdvertsComponent,
    AdvertsListComponent,
    SearchComponent,
    RoomsPipe,
    IntSurfaceSliderPipe,
    ExtSurfaceSliderPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
    NgxSliderModule
  ],
  exports: [
    AdvertsComponent
  ]
})
export class AdvertsModule { }