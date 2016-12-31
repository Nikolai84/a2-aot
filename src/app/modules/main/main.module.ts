
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CoreModule} from '../core/core.module';
import {PropertyModule} from '../property/property.module';
import {MainComponent} from './main.component';
import {MainRoutingModule} from './main.routing';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
import {MockData} from '../../mock_data/mock-data';
import {HomePageComponent} from '../../root_components/home.component';

export { MainComponent };

@NgModule({
  declarations: [MainComponent, HomePageComponent],
  bootstrap: [MainComponent],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    MainRoutingModule,
    CoreModule.forRoot({userName: 'test'}),
    PropertyModule,
    InMemoryWebApiModule.forRoot(MockData, {delay: 100, host: 'http://test', apiBase: '/'}),
  ],
  providers: []
})
export class MainModule {}
