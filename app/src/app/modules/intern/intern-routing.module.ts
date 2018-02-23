import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './components/index/index.component';
import { AuthGuard } from '../../core/guards/auth.guard';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ShippingComponent } from './components/shipping/shipping.component';
import { CreateComponent } from './components/create/create.component';


const routes: Routes = [
  {
      path: '',
      component: IndexComponent,
      // canActivate: AuthGuard,
      children: [
        {
          path: 'dashboard',
          component: DashboardComponent
        },
        {
          path: 'shipping/:from',
          component: ShippingComponent
        },
        {
          path: 'create',
          component: CreateComponent
        }
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InternRoutingModule { }
