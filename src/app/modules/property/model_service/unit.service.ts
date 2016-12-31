import {Injectable} from '@angular/core';
import {Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {HttpService} from '../../core/overrides/http.service';
import {UnitModel} from '../models/unit.model';


@Injectable()
export class UnitService {

	constructor(private http: HttpService) {
	}

	getUnits(): Observable<UnitModel[]> { // info poka bez buildId
		return this.http.get('/units')
			.map((response: Response) => {
				const responseData = response.json();
				return UnitModel.asList(responseData.data) as UnitModel[];
			});
	}

	saveUnit(model: UnitModel): Observable<UnitModel> { // @todo set generic namings saveModel ...
		return this.http.post('/units', UnitModel.convertToSnakeCasedProperties(model))
			.map((response: Response) => new UnitModel(response.json()));
	}

}
