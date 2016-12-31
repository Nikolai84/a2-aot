import { InMemoryDbService } from 'angular-in-memory-web-api';
import {units, buildings} from './models-mock-data';

export class MockData implements InMemoryDbService {
	createDb() {
		return {units, buildings};
	}
}