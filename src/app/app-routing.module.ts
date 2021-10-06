import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './home/home.component';
import { AdvertsListComponent } from './adverts/adverts-list/adverts-list.component';
<<<<<<< HEAD
import {LogoutComponent} from './auth/logout/logout.component';
=======
import { AdvertsCreationComponent } from './adverts/adverts-creation/adverts-creation.component';
>>>>>>> 8f30bbbb11f1da8d33598edd5d2ca108669e3b23

export const ROUTES: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'adverts', component: AdvertsListComponent},
  { path: 'adverts/create', component: AdvertsCreationComponent},
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent},
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
