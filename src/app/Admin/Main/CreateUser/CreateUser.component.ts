import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../../../http.service';
import { User } from '../../../Models/User';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Role } from '../../../Models/Role';

@Component({
  selector: 'CreateUser-app',
  templateUrl: './CreateUser.component.html',
  styleUrls: ['./CreateUser.component.css'],
  providers: [HttpService]
})
export class CreateUserComponent implements OnInit
{
  roles: Role[] = [];
  newUser: User = new User();
  id: string;    
  private routeSubscription: Subscription;

 
  constructor(private httpService: HttpService, private route: ActivatedRoute)
  {
    this.routeSubscription = route.params.subscribe(params => this.id = params['id']);
  }
  submit(user: User) {
    if (this.id != undefined) {
      user.id = this.id;
      console.log(user);
      this.httpService.UpdateUser(user).subscribe(
        (data: string) => { console.log(data) }, error => console.log(error));
    }
    else
    {
      this.httpService.CreateUser(user).subscribe(
        () => { }, error => console.log(error));
    }
  }

  ngOnInit() {
    
    this.httpService.getRoles().subscribe(data => { this.roles = data["obj"]; console.log(this.roles); }, error => console.log(error));
  }
}
