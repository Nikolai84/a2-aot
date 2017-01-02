import {Component} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {BaseReactiveForm} from '../../shared/base-reactive.form';
import {UnitModel} from '../models/unit.model';
import IUnitModel = hsp.property.IUnitModel;


@Component({
	selector: 'hsp-form-unit',
	templateUrl: 'unit.form.template.html'
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

	controlConfig(): Object {
		return {
			name: [ this.dataModel.name, Validators.required ],
		};
	}

	groupValidators(): Object | null {
		return null;
	}

}
