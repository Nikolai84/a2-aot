/// <reference path="./modules/property/property.module.d.ts" />

declare var localStorage: Storage;
declare var sessionStorage: Storage;

declare var ENV: string;
declare var API_URL: string;

interface IGlobalData {
	API_URL: string;
}