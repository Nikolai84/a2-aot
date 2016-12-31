import {Component } from '@angular/core';
import {BaseReactiveForm} from '../../shared/base-reactive.form';
import IBuildingModel = hsp.property.IBuildingModel;
import {FormBuilder, Validators, FormControl, FormGroup} from '@angular/forms';
import {BuildingModel} from '../models/building.model';
import {Router} from '@angular/router';


@Component({
	selector: 'hsp-form-building',
	templateUrl: './building.form.component.html',
})
export class BuildingFormComponent extends BaseReactiveForm<IBuildingModel> {
	constructor(protected fb: FormBuilder,
							protected router: Router) {
		super(fb);
		this.model = new BuildingModel();
	}

	controlConfig(): any {
		return {
			address: [this.dataModel.address, Validators.required ],
			buildingType: [this.dataModel.buildingType, Validators.required],
		};
	}

	groupValidators(): any {
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