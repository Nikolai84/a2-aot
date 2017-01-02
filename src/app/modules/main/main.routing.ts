import { RouterModule, Routes } from '@angular/router';
import {NgModule} from '@angular/core';
import {HomePageComponent} from '../../root_components/home.page.component';


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
