import {Optional} from '@angular/core';

export class UserServiceConfig {
	userName: string;
}

export class UserService {

	private userName: string;

	constructor(@Optional() config: UserServiceConfig) {
		if (config) { this.userName = config.userName; }
	}
}