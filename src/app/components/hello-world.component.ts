/// <reference path="../modules/property/property.module.d.ts" />

import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import  'rxjs/add/operator/mergeMap';
import {get} from 'lodash';
import * as moment from 'moment-timezone';


@Component({
  selector: 'hello-world-app',
  templateUrl: 'hello-world.template.html',
  // styleUrls: ['hello-world.style.scss']
})
export class HelloWorldComponent {
  constructor() {
    console.log(Router);
    console.log(Observable);
    Observable.of(10)
      .mergeMap((value) => Observable.of(value * 2))
      .subscribe((v) => {
        console.log('v',v);
      });
    console.log('m', moment());

    console.log('get', get({a: {b: 2}}, 'a.b'));
  }
}
