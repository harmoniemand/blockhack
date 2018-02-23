import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShippingModel } from '../../../../core/models/shipping.model';
import { ShippingRepository } from '../../../../core/repositories/shipping.repository';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.scss']
})
export class ShippingComponent implements OnInit {

  shipping: ShippingModel;

  constructor(
    private shippingRepository: ShippingRepository,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params['from']) {
        // load shipping
      } else {
        this.shipping = new ShippingModel();
      }
    });
  }

}
