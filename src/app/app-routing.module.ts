import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Importing our created components
import {HomeComponent} from './home/home.component';
import {RacerComponent} from './racer/racer.component';




const routes: Routes = [
  {path: 'home',component:HomeComponent},
  {path: 'racer', component: RacerComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
