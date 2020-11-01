import { Component, OnInit } from '@angular/core';
import { User, Roles } from '../../../Models/User';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpUserService } from '../../../HttpServices/http.users';
import { Role } from '../../../Models/Role';

@Component({
  selector: 'UserTable',
  templateUrl: './UsersTable.component.html',
  styleUrls: ['./UsersTable.component.css'],
  providers: [HttpUserService]
})
export class UsersTableComponent implements OnInit
{
  users: User[]=[];
  qser: User;
  id: string;
  private routeSubscription: Subscription;

  constructor(private httpUserService:HttpUserService,private route: ActivatedRoute, private router: Router)
  {    
    
  }  
  ngOnInit() {
    this.httpUserService.getUsers().subscribe((data : User[]) => { this.users = data; console.log(this.users); }, error => console.log(error));
  }
  Delete(i: number): void {
    this.httpUserService.deleteUser(i.toString()).subscribe(() => { }, error => console.log(error));
    setTimeout(() => this.Reload(), 1000);
  }
  Edit(i: number): void {
    this.router.navigate(
      ['/Admin/UpdateUser/' + i.toString()]
    );
  }

  Reload() {
    window.location.reload();
  }
}
