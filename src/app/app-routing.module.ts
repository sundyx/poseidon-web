import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { GraphsComponent } from '../components/graphs/graphs.component';
import { NavComponent } from '../components/nav/nav.component';
import {ImagesComponent} from '../components/images/images.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
{ path: 'graphs', component: GraphsComponent },
  { path: 'images', component: ImagesComponent },
{ path: 'nav', component: NavComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
