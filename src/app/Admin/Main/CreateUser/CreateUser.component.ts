import { Component, OnInit } from '@angular/core';
import { User } from '../../../Models/User';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Role } from '../../../Models/Role';
import { HttpUserService } from '../../../HttpServices/http.users';

@Component({
  selector: 'CreateUser-app',
  templateUrl: './CreateUser.component.html',
  styleUrls: ['./CreateUser.component.css'],
  providers: [HttpUserService]
})
export class CreateUserComponent implements OnInit {
  roles: Role[] = [];
  newUser: User = new User();
  id: string;
  private routeSubscription: Subscription;
  constructor(private httpUserService: HttpUserService, private route: ActivatedRoute) {
    this.routeSubscription = route.params.subscribe(params => this.id = params['id']);
  }
  
  ngOnInit() {
    if (this.id !== undefined) {
      this.httpUserService.getUser(this.id).subscribe((data: User) => { this.newUser = data; }, error => console.log(error));
    }
    this.httpUserService.getRoles().subscribe((data: Role[]) => { this.roles = data; console.log(this.roles); }, error => console.log(error));
  }

  submit(user: User) {
    this.AnswersFix(user);
    if (this.id != undefined) {
      console.log(user);
      this.httpUserService.putUser(user).subscribe(
        () => { }, error => console.log(error));
    }
    else {
      this.httpUserService.postUser(user).subscribe(
        () => { }, error => console.log(error));
    }
  }

  AnswersFix(user:User) {
    user["roleId"] = +user["roleId"];
  }
}
