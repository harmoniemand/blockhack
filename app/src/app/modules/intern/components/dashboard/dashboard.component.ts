import { Component, OnInit } from '@angular/core';
import { ShippingRepository } from '../../../../core/repositories/shipping.repository';
import { ShippingModel } from '../../../../core/models/shipping.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  shippings: ShippingModel[] = [];

  constructor(private shippingRepository: ShippingRepository) { }

  ngOnInit() {
    this.shippingRepository.GetAll().subscribe(result => { this.shippings = result; });
  }
}
