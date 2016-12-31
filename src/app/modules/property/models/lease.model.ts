import ILeaseModel = hsp.property.ILeaseModel;
import {BaseModel} from '../../core/base.model';

export class LeaseModel extends BaseModel implements ILeaseModel {
	tenants: string[]; // temporary // must be ids or smth of users autocomplete
	from: string; // ISO 8601
	to: string | null;
	deposit: number; // zalog
	depositDueDate: string; // einmalig falig one // date // @TODO data oplatu deposita
	rent: number; // ? sum of everything
	rentDueDate: string; // date when everything must be pade
	subTransactions: [{
		type: string; // net Rnet
		amount: number;
	}];
}