import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-warehouses',
  templateUrl: './warehouses.component.html',
  styleUrls: ['./warehouses.component.scss']
})
export class WarehousesComponent implements OnInit {

  warehouses = [
    {
      name: 'Kaufland Logistik Verteilzentrum Möckmühl',
      postAddress: '74219 Möckmühl',
      ethAddress: '0x000000000000000000000'
    },
    {
      name: 'Kaufland Logistik Geisenfeld',
      postAddress: 'Keltenstraße 3, 85290 Geisenfeld',
      ethAddress: '0x000000000000000000000'
    },
    {
      name: 'Kaufland logistics Dortmund Eving',
      postAddress: 'Feineisenstraße, 44339 Dortmund',
      ethAddress: '0x000000000000000000000'
    },
    {
      name: 'Kaufland Logistic Osterfeld',
      postAddress: 'Kirchweg 3, 06721 Meineweh',
      ethAddress: '0x000000000000000000000'
    },
    {
      name: 'Kaufland Logistic Lübbenau',
      postAddress: 'Am Kaufland 2, 03222 Lübbenau/Spreewald',
      ethAddress: '0x000000000000000000000'
    },
    {
      name: 'Kaufland Logistic Barsinghausen-Bantorf',
      postAddress: 'Dieselstraße 2, 30890 Barsinghausen',
      ethAddress: '0x000000000000000000000'
    },
    {
      name: 'DLZ Donnersdorf- Zentrallager Gewerbegebiet',
      postAddress: 'Am Rödertor 9, 97499 Donnersdorf',
      ethAddress: '0x000000000000000000000'
    }
  ];

  select (warehouse) {
    window.localStorage.setItem('warehouse', JSON.stringify(warehouse));
    this.router.navigate(['/productgroups'])
  }


  constructor(private router: Router) { }

  ngOnInit() {
  }

}
