import { Component } from '@angular/core';
import  'rxjs/add/operator/mergeMap';

import '../../../style/app.scss';

@Component({
  selector: 'app',
  templateUrl: 'app.template.html',
  styleUrls: ['app.style.scss']
})
export class AppComponent {
  constructor() {
  }
}
