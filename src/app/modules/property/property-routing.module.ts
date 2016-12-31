import {Routes, RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {PropertyRootPageComponent} from './property-root.page.component';
import {BuildingListPageComponent} from './building_list/building-list.page.component';
import {BuildingItemPageComponent} from './building_item/building-item.page.component';
import {BuildingsResolver} from './building_list/building.resolver';
import {UnitsResolver} from './building_item/unit.resolver';

const routes: Routes = [
  {
    path: 'properties',
    component: PropertyRootPageComponent,
    // canActivate: [AuthGuard],
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: BuildingListPageComponent,
        resolve: {
          buildings: BuildingsResolver
        }
      },
      {
        path: ':id',
        component: BuildingItemPageComponent,
        resolve: {
          units: UnitsResolver
        }
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class PropertyRoutingModule { }
