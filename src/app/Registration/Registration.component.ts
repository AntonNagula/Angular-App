import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../Models/User';

@Component({
  selector: 'Registration-root',
  templateUrl: './Registration.component.html',
  styleUrls: ['./Registration.component.css']
})
export class RegistrationComponent {
  newUser: User = new User();
  password: string;
  constructor(private router: Router) {  }
  //Submit(newUser: User) {
  //  newUser["roleId"] = "3";
  //  console.log(newUser, this.password);
  //  this.httpService.Registration(newUser).subscribe(
  //    (data) => {
  //      localStorage.setItem('UserId', data["id"]);        
  //    },
  //      error => console.log(error)
  //  );
    
  //  this.router.navigate(['/MainForAllUsers/Tours']);
  //}
}
