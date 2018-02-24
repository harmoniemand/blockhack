import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productgroups',
  templateUrl: './productgroups.component.html',
  styleUrls: ['./productgroups.component.scss']
})
export class ProductgroupsComponent implements OnInit {

  warehouse: any;

  productgroups: any[] = [
    {
      name: 'Trocken',
      ethAddress: '0x000000000000000000000'
    },
    {
      name: 'Kühl',
      ethAddress: '0x000000000000000000000'
    },
    {
      name: 'Gefroren',
      ethAddress: '0x000000000000000000000'
    },
    {
      name: 'Non-Food',
      ethAddress: '0x000000000000000000000'
    },
  ];

  constructor() { }

  ngOnInit() {
    this.warehouse = JSON.parse(window.localStorage.getItem('warehouse'));
  }

}
