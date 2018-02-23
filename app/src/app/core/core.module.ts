import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { RouterModule } from '@angular/router';

import { UserRepository } from './repositories/user.repository';
import { TimeslotRepository } from './repositories/timeslot.repository';

import { AuthService } from './services/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { environment } from '../../environments/environment';

import { Base64imgPipe } from './pipes/base64img.pipe';
import { ShippingRepository } from './repositories/shipping.repository';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
  ],
  declarations: [
    Base64imgPipe
  ],
  providers: [
    UserRepository,
    TimeslotRepository,
    ShippingRepository,

    AuthService,
    AuthGuard
  ],
  exports: [
    Base64imgPipe
  ]
})
export class CoreModule { }
