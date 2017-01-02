/// <reference path="./main.d.ts" />

import { platformBrowser } from '@angular/platform-browser';
import { MainModuleNgFactory } from '../../aot/src/app/modules/main/main.module.ngfactory';
import { enableProdMode } from '@angular/core';

console.log('current env', process.env);

if (process.env.ENV !== 'dev') {
	enableProdMode();
}
platformBrowser().bootstrapModuleFactory(MainModuleNgFactory);
