import { Component, OnInit } from '@angular/core';
import { User } from '../../../Models/User';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../../../HttpServices/http.service';

@Component({
  selector: 'UserTable-app',
  templateUrl: './UsersTable.component.html',
  styleUrls: ['./UsersTable.component.css'],
  providers: [HttpService]
})
export class UsersTableComponent implements OnInit
{
  users: User[]=[];
  qser: User;
  id: string;
  private routeSubscription: Subscription;

  constructor(private httpService: HttpService, private route: ActivatedRoute, private router: Router)
  {    
    this.routeSubscription = route.params.subscribe(params => this.id = params['id']);
  }  
  ngOnInit() {
    if (this.id != undefined) {
      this.httpService.DeleteUser(this.id).subscribe(() => { this.goToItem() }, error => console.log(error));
    }
    this.httpService.getUsers().subscribe((data : User[]) => { this.users = data; console.log(this.users); }, error => console.log(error));
  }
  
  goToItem() {

    this.router.navigate(
      ['/MainAdmin/UserTable']
    );
  }
}
