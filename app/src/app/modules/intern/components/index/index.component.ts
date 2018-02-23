import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  username: string = null;
  password: string = null;

  onSubmit() {
    
  }

  constructor(private router: Router) { }


  ngOnInit() {
    this.router.navigate(['/i/dashboard']);
  }

}
