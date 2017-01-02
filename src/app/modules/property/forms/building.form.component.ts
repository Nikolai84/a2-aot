import {Component } from '@angular/core';
import {BaseReactiveForm} from '../../shared/base-reactive.form';
import IBuildingModel = hsp.property.IBuildingModel;
import {FormBuilder, Validators} from '@angular/forms';
import {BuildingModel} from '../models/building.model';
import {Router} from '@angular/router';


@Component({
	selector: 'hsp-form-building',
	templateUrl: 'building.form.template.html',
})
export class BuildingFormComponent extends BaseReactiveForm<IBuildingModel> {
	constructor(protected fb: FormBuilder,
							protected router: Router) {
		super(fb);
		this.model = new BuildingModel();
	}

	controlConfig(): Object {
		return {
			address: [this.dataModel.address, Validators.required ],
			buildingType: [this.dataModel.buildingType, Validators.required],
		};
	}

	groupValidators(): Object | null {
		return null;
	}

	formErrors = {
		fields : {
			'address': '',
			'type': '',
		},
		hasErrors: false
	};

	validationMessages = {
		'address': {
			'required':  'Building address is required.',
		},
		'type': {
			'required': 'Building type is required.',
		}
	};

}