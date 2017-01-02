import {Component, OnInit, OnDestroy, ViewChild} from '@angular/core';
import IBuildingModel = hsp.property.IBuildingModel;
import {ActivatedRoute} from '@angular/router';
import {BuildingService} from '../model_service/building.service';
import {BuildingModel} from '../models/building.model';
import {DialogComponent} from '../../shared/dialog/dialog.component';
import 'rxjs/add/operator/mergeMap';

@Component({
	templateUrl: 'building-list.page.template.html'
})
export class BuildingListPageComponent implements OnInit, OnDestroy {
	@ViewChild(DialogComponent) dialog: DialogComponent;

	buildings: IBuildingModel[];

	constructor(
		private buildingService: BuildingService,
		private route: ActivatedRoute
	) {
	}

	ngOnInit() {
		this.buildings = this.route.snapshot.data['buildings'] as IBuildingModel[];
	}

	saveModel(model: BuildingModel) {
		// @TODO reset form if needed
		this.dialog.hide();
		this.buildingService.saveBuilding(model)
			.mergeMap(() => this.buildingService.getBuildings())
			.subscribe((buildings: BuildingModel[]) => {
				this.buildings = buildings;
			});
	}

  ngOnDestroy() {
		console.log('on destroy');
	}


}
