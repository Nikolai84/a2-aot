import {NgModule} from '@angular/core';
import {SharedModule} from '../shared';
import {PropertyRoutingModule} from './property-routing.module';
import {PropertyRootPageComponent} from './property-root.page.component';
import {BuildingListPageComponent} from './building_list/building-list.page.component';
import {BuildingItemPageComponent} from './building_item/building-item.page.component';
import {BuildingFormComponent} from './forms/building.form.component';
import {BuildingModelEventsService} from './model_service/building.model.events.service';
import {BuildingService} from './model_service/building.service';
import {BuildingsResolver} from './building_list/building.resolver';
import {UnitFormComponent} from './forms/unit.form.component';
import {UnitModelEventsService} from './model_service/unit.model.events.service';
import {UnitService} from './model_service/unit.service';
import {UnitsResolver} from './building_item/unit.resolver';


@NgModule({
  imports: [
   SharedModule,
   PropertyRoutingModule
  ],
  providers: [
    BuildingModelEventsService,
    BuildingService,
    BuildingsResolver,
    UnitModelEventsService,
    UnitService,
    UnitsResolver,
  ],
  declarations: [
    PropertyRootPageComponent,
    BuildingListPageComponent,
    BuildingItemPageComponent,
    BuildingFormComponent,
    UnitFormComponent,
  ]
})
export class PropertyModule {

}
