import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdvertsListComponent } from './adverts/adverts-list/adverts-list.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'adverts', component: AdvertsListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
