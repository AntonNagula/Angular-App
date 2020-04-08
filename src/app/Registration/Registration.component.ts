import { Component } from '@angular/core';
import { EnterData } from './../Models/EnterData';
import { Router } from '@angular/router';
import { HttpService } from '../HttpServices/http.service';
import { User } from '../Models/User';

@Component({
  selector: 'Enter-root',
  templateUrl: './Enter.component.html',
  styleUrls: ['./Enter.component.css'],
  providers: [HttpService]
})
export class EnterComponent {
  newUser: User = new User();

  constructor(private httpService: HttpService, private router: Router) {  }
  submit(newUser: User) {
    this.httpService.CreateUser(newUser).subscribe(
        (newUser: User) => {  },
        error => console.log(error)
    );
    //localStorage.setItem('UserId', this.receivedUser["userId"]);
    //console.log(localStorage.getItem('UserId'));
    //if (this.receivedUser.role == "админ") {
    //  this.router.navigate(['/MainAdmin/UserTable']);
    //}
    //else if (this.receivedUser.role == "работник") {
    //  this.router.navigate(['/MainClient/Tours']);
    //}
    //else {
    //  this.router.navigate(['/MainForAllUsers/Tours']);
    //}
  }
}
