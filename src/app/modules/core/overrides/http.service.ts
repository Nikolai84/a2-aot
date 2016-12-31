import {Injectable} from '@angular/core';
import {Http, XHRBackend, RequestOptions, Request, RequestOptionsArgs, Response, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {startsWith} from 'lodash';

@Injectable()
export class HttpService extends Http {

	constructor (backend: XHRBackend, options: RequestOptions) {
		super(backend, options);
	}

	private getApiUrl(url: string): string {
		return (startsWith(url, 'http://') || startsWith(url, 'https://')) ? url : `${'http://test'}${url}`;
	}

	request(request: string|Request, options?: RequestOptionsArgs): Observable<Response> {
		if (typeof request === 'string') { // meaning we have to add the token to the options, not in url
			if (!options) {
				// let's make option object
				options = {headers: new Headers()};
			}
			// options.headers.set('Authorization', `Bearer ${token}`);
		} else {
			request.url = this.getApiUrl(request.url);
			console.log('request http', request.getBody());
			// we have to add the token to the url object
			// url.headers.set('Authorization', `Bearer ${token}`);
		}
		return super.request(request, options).catch(this.catchAuthError());
	}

	private catchAuthError () {
		// we have to pass HttpService's own instance here as `self`
		return (res: Response) => {
			console.log('catch error !!!', res);
			if (res.status === 401 || res.status === 403) {
				// if not authenticated
				console.log(res);
			}
			return Observable.throw(res);
		};
	}
}