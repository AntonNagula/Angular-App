import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../HttpServices/http.service';
import { User } from '../Models/User';

@Component({
  selector: 'Registration-root',
  templateUrl: './Registration.component.html',
  styleUrls: ['./Registration.component.css'],
  providers: [HttpService]
})
export class RegistrationComponent {
  newUser: User = new User();
  password: string;
  constructor(private httpService: HttpService, private router: Router) {  }
  Submit(newUser: User) {
    newUser["roleId"] = "3";
    console.log(newUser, this.password);
    this.httpService.Registration(newUser).subscribe(
      (data) => {
        localStorage.setItem('UserId', data["id"]);        
      },
        error => console.log(error)
    );
    
    this.router.navigate(['/MainForAllUsers/Tours']);
  }
}
