import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import  'rxjs/add/operator/mergeMap';
import {get} from 'lodash';
import * as moment from 'moment-timezone';


@Component({
	selector: 'app-home',
	template: '<a routerLink="/properties">props</a>',
})
export class HomePageComponent {
	constructor() {
	}
}
