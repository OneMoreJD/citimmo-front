import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './home/home.component';
import { AdvertsComponent } from './adverts/adverts.component';
import {LogoutComponent} from './auth/logout/logout.component';
import { FileUploadComponent} from './fileUpload/file-upload.component.';
import { AdvertsCreationComponent } from './adverts/adverts-creation/adverts-creation.component';
import {AdvertDetailsComponent} from './adverts/advert-details/advert-details.component';
import { UserComponent } from './user/user.component';
import {AdvertsUpdateComponent} from './adverts/adverts-update/adverts-update.component';

export const ROUTES: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'adverts', component: AdvertsComponent},
  { path: 'adverts/create', component: AdvertsCreationComponent},
  { path: 'adverts/:advertId', component: AdvertDetailsComponent},
  { path: 'adverts/update/:advertId', component: AdvertsUpdateComponent},
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent},
  { path: 'user', component: UserComponent},
  { path: 'uploadFile', component: FileUploadComponent },
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
