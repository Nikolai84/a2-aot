
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CoreModule} from '../core/core.module';
import {PropertyModule} from '../property/property.module';
import {MainRoutingModule} from './main.routing';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import {HomePageComponent} from '../../root_components/home.component';
import {AppComponent} from './app.component';

export { AppComponent };

@NgModule({
  declarations: [AppComponent, HomePageComponent],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    MainRoutingModule,
    CoreModule.forRoot({userName: 'test'}),
    PropertyModule
  ],
  providers: []
})
export class MainModule {}
