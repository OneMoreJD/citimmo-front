import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdvertsComponent } from './adverts.component';
import { AdvertsListComponent } from './adverts-list/adverts-list.component';
import { AdvertDetailsComponent } from './advert-details/advert-details.component';
import { SearchComponent } from './search/search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { RoomsPipe } from './adverts-list/rooms.pipe';
import { IntSurfaceSliderPipe } from './search/int-surface-slider.pipe';
import { ExtSurfaceSliderPipe } from './search/ext-surface-slider.pipe';
import { AdvertsCreationComponent } from './adverts-creation/adverts-creation.component';
import { AdvertsUpdateComponent } from './adverts-update/adverts-update.component';

@NgModule({
  declarations: [
    AdvertsComponent,
    AdvertsListComponent,
    AdvertDetailsComponent,
    AdvertsCreationComponent,
    AdvertsUpdateComponent,
    SearchComponent,
    RoomsPipe,
    IntSurfaceSliderPipe,
    ExtSurfaceSliderPipe,
    AdvertsUpdateComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule
  ],
  exports: [
    AdvertsComponent
  ]
})
export class AdvertsModule { }
