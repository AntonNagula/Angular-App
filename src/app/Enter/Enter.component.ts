import { Component } from '@angular/core';
import { EnterData } from './../Models/EnterData';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../Services/AuthService';

@Component({
  selector: 'Enter',
  templateUrl: './Enter.component.html',
  styleUrls: ['./Enter.component.css'],
  providers: [AuthService]
})
export class EnterComponent {
  login: string;
  password: string;
  user: EnterData = new EnterData(); 
  warn: string;
  receivedUser: EnterData; 
  done: boolean = false;
  constructor(private authService: AuthService, private route: ActivatedRoute, private router: Router) { }

  submit($event: any) {
    //this.authService.Token(this.password, this.login);
    //console.log(this.receivedUser);
    //localStorage.setItem('UserId', this.receivedUser["userId"]);
    //console.log(localStorage.getItem('UserId'));
    //if (this.receivedUser.role == "админ") {
    //  this.router.navigate(['/MainAdmin/UserTable']);
    //}
    //else if (this.receivedUser.role == "работник") {
    //  this.router.navigate(['/MainClient/Tours']);
    //}
    //else if (this.receivedUser.role == "пользователь") {
    //  this.router.navigate(['/MainForAllUsers/Tours']);
    //}
    //else {
    // this.warn ="неправильно введен логин или пароль";
    //}
  }
}
