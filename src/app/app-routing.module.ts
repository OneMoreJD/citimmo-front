import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { QuickSearchComponent } from './home/quick-search/quick-search.component';


const routes: Routes =[
    { path : '', component: HomeComponent },
    { path : '\quickSearch', component: QuickSearchComponent },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
