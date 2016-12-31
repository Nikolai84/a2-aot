import {Subject} from 'rxjs/Subject';

export class ModelEventsService<Model> {
	protected modelSave$ = new Subject<Model>();

	emitSave(model: Model) {
		this.modelSave$.next(model);
	}

	modelSaveObservable() {
		// INFO some rxjs operators can be used before returning
		return this.modelSave$;
	}
}