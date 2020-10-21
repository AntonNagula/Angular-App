import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'UsersView',
  templateUrl: './UsersView.component.html',
  styleUrls: ['./UsersView.component.css']
})
export class UsersViewComponent {

  constructor(private router: Router) {
    
  }
  Create($event: any): void {
    this.ToCreateForms();
  }
  ToCreateForms() {
    this.router.navigate(
      ['/Admin/CreateUser']
    );
  }
}
