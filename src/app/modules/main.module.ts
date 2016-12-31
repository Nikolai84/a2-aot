
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HelloWorldComponent } from '../components/hello-world.component';
import {CoreModule} from './core/core.module';
import {PropertyModule} from './property/property.module';

export { HelloWorldComponent };

@NgModule({
  bootstrap: [HelloWorldComponent],
  declarations: [HelloWorldComponent],
  imports: [
    BrowserModule,
    CoreModule.forRoot({userName: 'test'})
    // PropertyModule
  ],
  providers: []
})
export class MainModule {}
