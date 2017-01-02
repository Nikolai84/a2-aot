
import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import  'rxjs/add/operator/mergeMap';
import {get} from 'lodash';
import * as moment from 'moment-timezone';
import * as $ from 'jquery';
import '../../../style/app.scss';

@Component({
  selector: 'app',
  templateUrl: 'app.template.html',
  styleUrls: ['app.style.scss']
})
export class AppComponent {
  constructor() {
    console.log('Main component construct');
    console.log(Router);
    console.log(Observable);
    Observable.of(10)
      .mergeMap((value) => Observable.of(value * 2))
      .subscribe((v) => {
        console.log('v', v);
      });
    console.log('m', moment());
    console.log('jquery', $('body'));

    console.log('get', get({a: {b: 2}}, 'a.b'));
  }
}
