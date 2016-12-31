import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from './main.component';
import {NgModule} from '@angular/core';
import {HomePageComponent} from '../../root_components/home.component';


const routes: Routes = [
  { path: '', component: HomePageComponent },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class MainRoutingModule { }
