import {Injectable} from '@angular/core';
import {HttpService} from '../../core/overrides/http.service';
import {Response} from '@angular/http';
import {BuildingModel} from '../models/building.model';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class BuildingService {

  lastBuildingsFetch$: Observable<BuildingModel[]>;

	constructor(private http: HttpService) {
	}

	getBuildings(): Observable<BuildingModel[]> {
		return this.lastBuildingsFetch$ = this.http.get('/buildings')
			.map((response: Response) => {
				const responseData = response.json();
				return BuildingModel.asList(responseData.data) as BuildingModel[];
			});
	}

	saveBuilding(model: BuildingModel): Observable<BuildingModel> {
		return this.http.post('/buildings', BuildingModel.convertToSnakeCasedProperties(model))
			.map((response: Response) => new BuildingModel(response.json()));
	}
}