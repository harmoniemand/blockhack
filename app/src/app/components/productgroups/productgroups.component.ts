import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  select(group: any) {
    window.localStorage.setItem('productgroup', JSON.stringify(group));
    this.router.navigate(['/slots']);
  }

  constructor(private router: Router) { }

  ngOnInit() {
    this.warehouse = JSON.parse(window.localStorage.getItem('warehouse'));
  }

}
