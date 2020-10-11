import { Component } from '@angular/core';
import { EnterData } from './../Models/EnterData';
import { Router } from '@angular/router';
import { HttpService } from '../HttpServices/http.service';

@Component({
  selector: 'Enter-root',
  templateUrl: './Enter.component.html',
  styleUrls: ['./Enter.component.css'],
  providers: [HttpService]
})
export class EnterComponent {
  user: EnterData = new EnterData(); 
  warn: string;
  receivedUser: EnterData; 
  done: boolean = false;
  constructor(private httpService: HttpService, private router: Router) {  }
  submit(user: EnterData) {
    this.httpService.postData(user)
      .subscribe(
        (data: EnterData) => { this.receivedUser = data; this.done = true; },
        error => console.log(error)
    );
    console.log(this.receivedUser);
    localStorage.setItem('UserId', this.receivedUser["userId"]);
    console.log(localStorage.getItem('UserId'));
    if (this.receivedUser.role == "админ") {
      this.router.navigate(['/MainAdmin/UserTable']);
    }
    else if (this.receivedUser.role == "работник") {
      this.router.navigate(['/MainClient/Tours']);
    }
    else if (this.receivedUser.role == "пользователь") {
      this.router.navigate(['/MainForAllUsers/Tours']);
    }
    else {
     this.warn ="неправильно введен логин или пароль";
    }
  }
}
