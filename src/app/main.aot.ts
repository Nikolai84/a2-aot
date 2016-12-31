/// <reference path="./main.d.ts" />

import { platformBrowser } from '@angular/platform-browser';
import { MainModuleNgFactory } from '../../aot/src/app/modules/main/main.module.ngfactory';

platformBrowser().bootstrapModuleFactory(MainModuleNgFactory);
