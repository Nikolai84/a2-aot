import {
	Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter
} from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';

export abstract class BaseReactiveForm<Model> implements OnInit {

	@Input() set model(model) {
		this.setModel(model);
	}

	@Output() onSaveModel = new EventEmitter<Model>();

	dataModel: Model;
	form: FormGroup;

	constructor(protected fb: FormBuilder) {
	}

	ngOnInit() {
		this.buildForm();
	}

	abstract controlConfig();

	abstract groupValidators();

	onSubmit($event) {
		Object.assign(this.dataModel, this.form.value);
		this.onSaveModel.emit(this.dataModel);
	}

	buildForm(): void {
		if (!this.dataModel) {
			this.dataModel = {} as Model;
		}
		this.form = this.fb.group(this.controlConfig(), this.groupValidators());
		this.form.valueChanges.subscribe(() => this.onValueChanged());
		this.onValueChanged();
	}

	onValueChanged() {
		if (!this.form) { return; }
		const form = this.form;
		this.formErrors.hasErrors = false;
		for (const field in this.formErrors.fields) {
			// clear previous error message (if any)
			this.formErrors.fields[field] = '';
			const control = form.get(field);
			if (control && control.dirty && !control.valid) {
				this.formErrors.hasErrors = true;
				const messages = this.validationMessages[field];
				for (const key in control.errors) {
					this.formErrors.fields[field] += messages[key] + ' ';
				}
			}
		}
	}

	protected setModel(model) {
		this.dataModel = model;
		this.buildForm();
	}

	hasErrors(): boolean {
		if (!this.form) return false;
		return this.formErrors.hasErrors;
	}

	isValidToSubmit(): boolean {
		if (!this.form) return false;
		return this.form.valid;
	}

	showAllErrors(): string {
		let errors = '';
		for (const field in this.formErrors.fields) {
			if (this.formErrors.fields[field]) {
				errors += this.formErrors.fields[field] + ' ';
			}
		}
		return errors;
	}

	formErrors = {
		fields : {
		},
		hasErrors: false
	};

	validationMessages = {
	};

}
