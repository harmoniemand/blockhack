import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InternRoutingModule } from './intern-routing.module';

import { IndexComponent } from './components/index/index.component';
import { CoreModule } from './../../core/core.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ShippingComponent } from './components/shipping/shipping.component';
import { CreateComponent } from './components/create/create.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    HttpClientModule,

    InternRoutingModule,
    CoreModule
  ],
  declarations: [
    IndexComponent,
    DashboardComponent,
    ShippingComponent,
    CreateComponent,
  ]
})
export class InternModule { }
