import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { ReactiveFormsModule }  from '@angular/forms';
import {FormContainerComponent} from './form-container.component';
import {DialogComponent} from './dialog/dialog.component';
// INFO Widget Module just declarations no providers !
// hold the common components, directives, and pipes and
// share them with the modules that need them
@NgModule({
	imports:      [ CommonModule ],
	exports:      [
		CommonModule,
		ReactiveFormsModule,
		DialogComponent
	],
	declarations: [
		FormContainerComponent,
		DialogComponent
	]
})
export class SharedModule { }