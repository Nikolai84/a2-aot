import { Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot } from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {UnitService} from '../model_service/unit.service';
import IUnitModel = hsp.property.IUnitModel;


@Injectable()
export class UnitsResolver implements Resolve<IUnitModel[]> {

	constructor(
    private unitService: UnitService,
    private router: Router
  ) { }

	resolve(route: ActivatedRouteSnapshot): Observable<IUnitModel[]> {
		console.log(route.params['id']);
		return this.unitService.getUnits()
			.catch(error => {
				this.router.navigate(['/']); // @TODO error notification ... maybe)
				console.log(error);
				return [error];
			});
	}

}
