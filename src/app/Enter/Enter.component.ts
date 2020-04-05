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
    if (this.receivedUser.role == "админ") {
      this.router.navigate(['/MainAdmin']);
    }
    else if (this.receivedUser.role == "работник") {
      this.router.navigate(['/MainClient']);
    }
    else {
      this.router.navigate(['/MainForAllUsers']);
    }
  }
}
