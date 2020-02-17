import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../http.service';
import { User } from '../../../Models/User';

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
  constructor(private httpService: HttpService) {
    
  }  
  ngOnInit() {
    this.httpService.getUsers().subscribe(data => { this.users = data["obj"]; console.log(this.users); }, error => console.log(error));
    console.log(this.users);
  }
}
