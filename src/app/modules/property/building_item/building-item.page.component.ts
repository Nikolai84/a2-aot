import {Component, OnInit, ViewChild} from '@angular/core';
import {DialogComponent} from '../../shared/dialog/dialog.component';
import {UnitModel} from '../models/unit.model';
import {ActivatedRoute} from '@angular/router';
import {UnitService} from '../model_service/unit.service';


@Component({
	templateUrl: 'building-item.page.template.html'
})
export class BuildingItemPageComponent implements OnInit {

	@ViewChild(DialogComponent) dialog: DialogComponent;

	units: UnitModel[];

	constructor(private route: ActivatedRoute, private unitService: UnitService) {
	}

	ngOnInit() {
		this.units = this.route.snapshot.data['units'] as UnitModel[];
	}

	saveModel(model: UnitModel) {
		// @TODO reset form if needed
		this.unitService.saveUnit(model)
			.mergeMap(() => this.unitService.getUnits())
			.subscribe((models: UnitModel[]) => this.units = models);
		this.dialog.hide();
	}
}