import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './auth/register/register.component';
import { HomeComponent } from './home/home.component';
import { AdvertsListComponent } from './adverts/adverts-list/adverts-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'adverts', component: AdvertsListComponent},
  { path: 'register', component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
