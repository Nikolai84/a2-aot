import { Injectable } from '@angular/core';
import { Router, Resolve } from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {BuildingService} from '../model_service/building.service';
import IBuildingModel = hsp.property.IBuildingModel;


@Injectable()
export class BuildingsResolver implements Resolve<IBuildingModel[]> {

	constructor(private buildingService: BuildingService, private router: Router) {
  }

	resolve(): Observable<IBuildingModel[]> {
		return this.buildingService.getBuildings()
			.catch(err => {
				this.router.navigate(['/']); // @TODO error notification ... maybe)
				return [err];
			});
	}

}
