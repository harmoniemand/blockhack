import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { UserModel } from './../../core/models/user.model';
import { UserRepository } from './../../core/repositories/user.repository';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  user: UserModel;

  login() {
  }

  logout() {
    
  }

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.User.subscribe(user => this.user = user);
  }

}
