declare namespace hsp.property {

	interface IBuildingAddress {
		country: string;
		zip: string;
		city: string;
		street: string;
		house: string;
	}

  interface IBuildingModel {
		name: string;
		landlord: string; // must be UserModel
		buildingType: 'SINGLE' | 'MULTI';
		constructionYear: number;
    address: string; // IBuildingAddress;
    units: IUnitModel[]; // with units on get list
  }

  interface ILeaseModel {
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

  interface IUnitModel {
  	building: IBuildingModel; // id
    name: string; // Bezeichnung // @TODO
    floorArea: number;
    floor: string; // @TODO value EG what is it
    rooms: number;
    leases: ILeaseModel[]; // with leases
  }
}
