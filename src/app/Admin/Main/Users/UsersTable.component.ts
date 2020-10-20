import { Component, OnInit } from '@angular/core';
import { User } from '../../../Models/User';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'UserTable-app',
  templateUrl: './UsersTable.component.html',
  styleUrls: ['./UsersTable.component.css']
})
export class UsersTableComponent 
{
  users: User[]=[];
  qser: User;
  id: string;
  private routeSubscription: Subscription;

  constructor(private route: ActivatedRoute, private router: Router)
  {    
    this.routeSubscription = route.params.subscribe(params => this.id = params['id']);
  }  
  //ngOnInit() {
  //  if (this.id != undefined) {
  //    this.httpService.DeleteUser(this.id).subscribe(() => { this.goToItem() }, error => console.log(error));
  //  }
  //  this.httpService.getUsers().subscribe((data : User[]) => { this.users = data; console.log(this.users); }, error => console.log(error));
  //}
  
  goToItem() {

    this.router.navigate(
      ['/MainAdmin/UserTable']
    );
  }
}
