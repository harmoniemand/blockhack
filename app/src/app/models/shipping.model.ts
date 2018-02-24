
import { TimeslotModel } from './timeslot.model';

export class ShippingModel {
    Bay: string;
    Slots: TimeslotModel[];
    Productgroup: string;
    From: Date;
    To: Date;
}