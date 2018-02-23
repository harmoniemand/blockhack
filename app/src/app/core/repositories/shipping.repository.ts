import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ShippingModel } from '../models/shipping.model';


@Injectable()
export class ShippingRepository {


    GetAll(): Observable<ShippingModel[]> {



        return Observable.of([
            {
                From: new Date(2018, 1, 23, 12),
                To: new Date(2018, 1, 23, 12, 30),
                Productgroup: 'Trockenware',
                Slots: [],
                Bay: 'Bay 21'
            },
            {
                From: new Date(2018, 1, 23, 12),
                To: new Date(2018, 1, 23, 12, 30),
                Productgroup: 'Trockenware',
                Slots: [],
                Bay: 'Bay 21'
            },
            {
                From: new Date(2018, 1, 23, 12),
                To: new Date(2018, 1, 23, 12, 30),
                Productgroup: 'Trockenware',
                Slots: [],
                Bay: 'Bay 21'
            },
            {
                From: new Date(2018, 1, 23, 12),
                To: new Date(2018, 1, 23, 12, 30),
                Productgroup: 'Trockenware',
                Slots: [],
                Bay: 'Bay 21'
            }
        ])
    }

    constructor(private http: HttpClient) { }

}
