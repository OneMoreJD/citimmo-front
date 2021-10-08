import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import localeFr from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeFr);

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeModule } from './home/home.module';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdvertsListComponent } from './adverts/adverts-list/adverts-list.component';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app-routing.module';
import {AuthHttpInterceptor} from './auth/auth-http.interceptor';
import { HeaderModule } from './header/header.module';
import { AdvertDetailsComponent } from './adverts/advert-details/advert-details.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { GridColsDirective } from './shared/directives/grid-cols.directive';

@NgModule({
  declarations: [
    AppComponent,
    AdvertsListComponent,
    AdvertDetailsComponent,
    GridColsDirective,
  ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HomeModule,
        SharedModule,
        AuthModule,
        HttpClientModule,
        HeaderModule,
        MatGridListModule,
    ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr-FR'},
    { provide: HTTP_INTERCEPTORS, useClass: AuthHttpInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
