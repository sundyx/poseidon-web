import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GraphsComponent } from './graphs/graphs.component';
import { NavComponent } from './nav/nav.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
{ path: 'graphs', component: GraphsComponent },
{ path: 'nav', component: NavComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
