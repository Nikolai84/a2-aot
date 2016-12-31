
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CoreModule} from '../core/core.module';
import {PropertyModule} from '../property/property.module';
import {MainComponent} from './main.component';
import {MainRoutingModule} from './main.routing';

export { MainComponent };

@NgModule({
  bootstrap: [MainComponent],
  declarations: [MainComponent],
  imports: [
    BrowserModule,
    MainRoutingModule,
    CoreModule.forRoot({userName: 'test'}),
    PropertyModule
  ],
  providers: []
})
export class MainModule {}
