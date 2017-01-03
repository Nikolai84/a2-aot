import camelCase from 'lodash/camelCase'; // allowSyntheticDefaultImports = true needed for rollup
import isObject from 'lodash/isObject';
import snakeCase from 'lodash/snakeCase';
import isArray from 'lodash/isArray';

function transformProps(data: Object, propTransformer: Function = camelCase) {
	let camelCasedData = {};
	Object.keys(data).forEach((propertyName) => {
		if (isObject(data[propertyName]) && !isArray(data[propertyName])) {
			camelCasedData[propTransformer(propertyName)] = transformProps(data[propertyName]);
		}else {
			camelCasedData[propTransformer(propertyName)] = data[propertyName];
		}
	});
	return camelCasedData;
}

export class BaseModel {

	constructor(data: Object = {}, isCamelCase = true) {
		const propTransformer = isCamelCase ? camelCase : snakeCase;
		Object.assign(this, transformProps(data, propTransformer));
	}

	static asList(listData: Object[], isCamelCase = true) {
		return listData.map((data: Object) => {
			return new this(data, isCamelCase);
		});
	}

	static convertToSnakeCasedProperties(model) {
		return transformProps(model, snakeCase);
	}

	static convertToCamelCasedProperties(model) {
		return transformProps(model, camelCase);
	}

}