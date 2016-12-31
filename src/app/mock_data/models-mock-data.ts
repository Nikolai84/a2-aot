import {omit} from 'lodash';

// INFO in order to avoid circular load
const units = [
	{ 'id': 1, 'building': null, 'floorArea': 60.5, 'rooms': 2.5, 'name': 'unit 1 of buliding 1', 'floor': 'EG' },
	{ 'id': 2, 'building': null, 'floorArea': 40.8, 'rooms': 2, 'name': 'unit 2 of buliding 2', 'floor': 'basement' },
	{ 'id': 3, 'building': null, 'floorArea': 80.5, 'rooms': 3, 'name': 'unit 3 of buliding 3', 'floor': '4th floor' },
	{ 'id': 4, 'building': null, 'floorArea': 30.5, 'rooms': 1, 'name': 'unit 4 of buliding 3', 'floor': '5th floor' },
	{ 'id': 5, 'building': null, 'floorArea': 100.5, 'rooms': 3, 'name': 'unit 5 of buliding 4', 'floor': '3th floor' },
];
const buildings = [
	{ 'id': 1, 'address': 'some street 1', 'buildingType': 'SINGLE', name: 'some desc', units: [units[0], units[1]] },
	{ 'id': 2, 'address': 'some street 2', 'buildingType': 'MULTI', name: 'some desc', units: [units[2]] },
	{ 'id': 3, 'address': 'some street 3', 'buildingType': 'SINGLE', name: 'some desc', units: [units[3]] },
	{ 'id': 4, 'address': 'some street 4', 'buildingType': 'MULTI', name: 'some desc', units: [units[4]] },
	{ 'id': 5, 'address': 'some street 5', 'buildingType': 'SINGLE', name: 'some desc', }
];
// INFO avoid error - Converting circular structure to JSON

units[0]['building'] = omit(buildings[0], 'units');
units[1]['building'] = omit(buildings[0], 'units');
units[2]['building'] = omit(buildings[1], 'units');
units[3]['building'] = omit(buildings[2], 'units');
units[4]['building'] = omit(buildings[3], 'units');

export {buildings, units};


