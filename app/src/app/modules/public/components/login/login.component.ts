import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../../../core/services/auth.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string = null;
  password: string = null;

  onSubmit() {
    this.authService
      .Login(this.username, this.password);
  }

  constructor(
      private router: Router, 
      private authService: AuthService) { }


  ngOnInit() { }

}
