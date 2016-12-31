import {
	Component, ComponentFactoryResolver, ViewContainerRef, ViewChild, ComponentRef, OnInit
} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
	selector: 'hsp-form-container',
	template: `
    <div #formContainer></div>
  `
})
export class FormContainerComponent implements OnInit { // @TODO rename to formDialogContainer

	@ViewChild('formContainer', {read: ViewContainerRef}) private container: ViewContainerRef;

	private componentRef: ComponentRef<Object>;

	constructor(private route: ActivatedRoute, private resolver: ComponentFactoryResolver) {
	}

	ngOnInit() {
		const {component} = this.route.snapshot.data;
		const componentFactory = this.resolver.resolveComponentFactory(component);
		this.componentRef = this.container.createComponent(componentFactory);
	}

}