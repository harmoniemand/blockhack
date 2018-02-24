import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { WarehousesComponent } from './components/warehouses/warehouses.component';
import { ProductgroupsComponent } from './components/productgroups/productgroups.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule.forRoot()
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    WarehousesComponent,
    ProductgroupsComponent,
    DashboardComponent
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
