import { Component } from '@angular/core';
import { EnterData } from './../Models/EnterData';
import { HttpService } from './../http.service';
import { Router } from '@angular/router';

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
    if (this.receivedUser.name == "Антон") {
      this.router.navigate(['/MainAdmin']);
    }
    else {
      this.router.navigate(['/MainClient']);
    }
  }
}
