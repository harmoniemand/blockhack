import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-slot',
  templateUrl: './slots.component.html',
  styleUrls: ['./slots.component.scss']
})
export class SlotsComponent implements OnInit {

  warehouse: any;

  productgroup: any;

  slots: any[] = [];

  select(slot: any) {
    switch (slot.selected) {
      case 0: slot.selected = 2; break;
      case 1: break;
      case 2: slot.selected = 0; break;
    }
  }

  constructor() { }

  ngOnInit() {
    this.warehouse = JSON.parse(window.localStorage.getItem('warehouse'));
    this.productgroup = JSON.parse(window.localStorage.getItem('productgroup'));

    for (let i = 0; i < 96; i++) {
      this.slots.push({
        index: i,
        start: moment(moment().format('YYYY.MM.DD'), 'YYYY.MM.DD').add(15 * i, 'm').toDate(),
        selected: 0
      });
    }
  }

}
