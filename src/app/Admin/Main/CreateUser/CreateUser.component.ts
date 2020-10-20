import { Component } from '@angular/core';
import { User } from '../../../Models/User';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Role } from '../../../Models/Role';

@Component({
  selector: 'CreateUser-app',
  templateUrl: './CreateUser.component.html',
  styleUrls: ['./CreateUser.component.css']
})
export class CreateUserComponent {
  roles: Role[] = [];
  newUser: User = new User();
  id: string;    
  private routeSubscription: Subscription; 
  constructor(private route: ActivatedRoute)
  {
    this.routeSubscription = route.params.subscribe(params => this.id = params['id']);
  }
  //submit(user: User) {
  //  if (this.id != undefined) {
  //    user.id = this.id;
  //    console.log(user);
  //    this.httpService.UpdateUser(user).subscribe(
  //      (data: string) => { console.log(data) }, error => console.log(error));
  //  }
  //  else
  //  {
  //    this.httpService.CreateUser(user).subscribe(
  //      () => { }, error => console.log(error));
  //  }
  //}

  //ngOnInit() {
  //  if (this.id != undefined)
  //  {
  //    this.httpService.getUser(this.id).subscribe(
  //      data =>
  //      {
  //        this.newUser["name"] = data["name"];
  //        this.newUser["surname"] = data["surname"];
  //        this.newUser["email"] = data["email"];
  //        this.newUser["roleId"] = data["roleId"];
  //        this.newUser["role"] = data["role"];
  //        this.newUser["password"] = data["password"];
  //      },
  //      error => console.log(error)
  //    );
  //  }
  //  this.httpService.getRoles().subscribe((data: Role[]) => { this.roles = data; console.log(this.roles); }, error => console.log(error));
  //}
}
