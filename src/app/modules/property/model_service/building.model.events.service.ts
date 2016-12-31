import {Injectable} from '@angular/core';
import {ModelEventsService} from '../../core/model.events.service';
import IBuildingModel = hsp.property.IBuildingModel;

@Injectable()
export class BuildingModelEventsService extends ModelEventsService<IBuildingModel> {

}
