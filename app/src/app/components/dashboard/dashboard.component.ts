import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  shippings: any[] = [
    {
      bay: 'Bay 1',
      slots: [],
      productgroup: 'Non-Food',
      from: new Date(2018, 1, 25, 12),
      to: new Date(2018, 1, 25, 12, 30),
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
