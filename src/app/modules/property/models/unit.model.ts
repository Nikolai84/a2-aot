import IUnitModel = hsp.property.IUnitModel;
import ILeaseModel = hsp.property.ILeaseModel;
import {BaseModel} from '../../core/base.model';
import {BuildingModel} from './building.model';
import IBuildingModel = hsp.property.IBuildingModel;

export class UnitModel extends BaseModel implements IUnitModel {
	building: IBuildingModel; // id
	name: string; // Bezeichnung // @TODO
	floorArea: number;
	floor: string; // @TODO value EG what is it
	rooms: number;
	leases: ILeaseModel[]; // with leases

	constructor(data = {}) {
		super(data);
		const {building} = data as UnitModel;
		building && (this.building = new BuildingModel(building));
	}
}
