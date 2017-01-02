import {
	ModuleWithProviders, NgModule,
	Optional, SkipSelf }       from '@angular/core';
import { CommonModule }      from '@angular/common';
import { UserService, UserServiceConfig }  from './user.service';
import {ApiService} from './api.service';
import {requestOptionsProvider} from './overrides/default-request-options.service';
import {HttpService} from './overrides/http.service';
import {XHRBackend, RequestOptions} from '@angular/http';

export function useFactory (backend: XHRBackend, options: RequestOptions) {
	return new HttpService(backend, options);
}

@NgModule({
	imports: [
		CommonModule // @TODO can't export API_URL error on path resolving while compiling
	],
	providers: [
		UserService,
		requestOptionsProvider,
		{
			provide: HttpService,
			useFactory,
			deps: [XHRBackend, RequestOptions]
		},
		// @INFO include requestOptionsProvider provider during setup when unit testing the app's HTTP services
	]
})
export class CoreModule {

	constructor (@Optional() @SkipSelf() parentModule: CoreModule) {
		if (parentModule) {
			throw new Error(
				'CoreModule is already loaded. Import it in the AppModule only');
		}
	}

	static forRoot(config: UserServiceConfig): ModuleWithProviders {
		return {
			ngModule: CoreModule,
			providers: [
				{provide: UserServiceConfig, useValue: config },
				ApiService
			]
		};
	}
}

/* INFO
 gather providers, components that only appears in the root AppComponent and put
 them in a single CoreModule that we import on
 ce when the app starts and never import anywhere else.
 @see https://angular.io/docs/ts/latest/guide/ngmodule.html#!#core-module
*/