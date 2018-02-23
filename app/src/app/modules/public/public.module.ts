import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicRoutingModule } from './public-routing.module';

import { LoginComponent } from './components/login/login.component';
import { CoreModule } from './../../core/core.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    PublicRoutingModule,
    FormsModule,
    CoreModule
  ],
  declarations: [LoginComponent]
})
export class PublicModule { }
