import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { TimeslotModel } from '../models/timeslot.model';


@Injectable()
export class TimeslotRepository {


    GetAll(): Observable<TimeslotModel[]> {
        return Observable.of([
            {
                Start: new Date(2018, 1, 23, 12),
                Storno: null,
                Address: '0xfabbe0a4cbb64b3b0c630fd4e0ec6813f4200000'
            }
        ])
    }

    constructor(private http: HttpClient) { }

}
