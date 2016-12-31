import IBuildingModel = hsp.property.IBuildingModel;
import IUnitModel = hsp.property.IUnitModel;
import {BaseModel} from '../../core/base.model';
import {UnitModel} from './unit.model';

export class BuildingModel extends BaseModel implements IBuildingModel {
	name: string;
	landlord: string; // must be UserModel
	buildingType: 'SINGLE' | 'MULTI';
	constructionYear: number;
	address: string; // IBuildingAddress;
	units: IUnitModel[]; // with units on get list

	constructor(data = {}) {
		super(data);
		const {units = []} = data as BuildingModel;
		this.units = UnitModel.asList(units) as UnitModel[];
	}
}