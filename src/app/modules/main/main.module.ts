/// <reference path="../../main.d.ts" />

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CoreModule} from '../core/core.module';
import {PropertyModule} from '../property/property.module';
import {MainRoutingModule} from './main.routing';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import {HomePageComponent} from '../../root_components/home.page.component';
import {AppComponent} from './app.component';
import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
import {MockData} from '../../mock_data/mock-data';

export { AppComponent };

console.log('API_URL', API_URL);

@NgModule({
  declarations: [AppComponent, HomePageComponent],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    MainRoutingModule,
    CoreModule.forRoot({userName: 'test'}),
    InMemoryWebApiModule.forRoot(MockData, {
      delay: 100,
      host: 'http:/some.url',
      // @INFO
      // API_URL used inside decorator triggers error during aot compilation: Property 'API_URL' does not exist on type
      // 'typeof' MainModule
      // it doesn't fail build, if necessary 'defineplugin vars: API_URL, ...' can be used
      apiBase: '/'
    }),
    PropertyModule
  ],
  providers: []
})
export class MainModule {}
