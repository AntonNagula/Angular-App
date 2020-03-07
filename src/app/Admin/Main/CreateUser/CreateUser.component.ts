import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../http.service';
import { User } from '../../../Models/User';

@Component({
  selector: 'CreateUser-app',
  templateUrl: './CreateUser.component.html',
  styleUrls: ['./CreateUser.component.css'],
  providers: [HttpService]
})
export class CreateUserComponent
{
  newUser: User = new User();

  done: boolean = false;
  constructor(private httpService: HttpService) { }
  submit(user: User) {
    this.httpService.CreateUser(user).subscribe(
      (data: string) => { console.log(data) },
      error => console.log(error)
    );
    }
}
