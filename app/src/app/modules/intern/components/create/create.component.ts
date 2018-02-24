import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';
import { TimeslotModel } from '../../../../core/models/timeslot.model';
import * as moment from 'moment';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  productGroups: any[] = [];

  slots: any[] = [];

  selectGroup(group: any) {
    this.productGroups.forEach(g => { g.selected = 0; });
    group.selected = 2;
  }

  selectSlot(slot: any) {
    console.log(slot);

    if (slot.selected == 2) {
      slot.selected = 0;
    } else if (slot.selected == 0) {
      slot.selected = 2;
    }

  }

  constructor(private http: HttpClient) { }

  ngOnInit() {
    var url = environment.endpoint.productgroups;
    this.http.get(url).subscribe(result => {
      console.log(result);
      Object.keys(result).forEach(key => {
        this.productGroups.push({
          key: key,
          value: result[key]
        });
      });
    });

    for (let i = 0; i < 96; i++) {
      this.slots.push({
        selected: 0,
        start: moment(moment().format('YYYY.MM.DD'), 'YYYY.MM.DD').add(15 * i, 'm').toDate()
      });
    }
  }

}
