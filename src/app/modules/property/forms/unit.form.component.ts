import {Component} from '@angular/core';
import {FormBuilder, Validators, FormControl, FormGroup} from '@angular/forms';
import {BaseReactiveForm} from '../../shared/base-reactive.form';
import {UnitModel} from '../models/unit.model';
import IUnitModel = hsp.property.IUnitModel;
import {Router} from '@angular/router';


@Component({
	selector: 'hsp-form-unit',
	templateUrl: './unit.form.component.html'
})
export class UnitFormComponent extends BaseReactiveForm<IUnitModel> {

	formErrors = {
		fields : {
			'name': '',
		},
		hasErrors: false
	};

	validationMessages = {
		'name': {
			'required': 'Description is required.',
		},
	};

	constructor(protected fb: FormBuilder) {
		super(fb);
		this.model = new UnitModel();
	}

	controlConfig(): any {
		return {
			name: [ this.dataModel.name, Validators.required ],
		};
	}

	groupValidators(): any {
		return null;
	}

}
