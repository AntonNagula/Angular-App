import { Component, OnInit, SimpleChanges, OnChanges, OnDestroy, ViewChild, TemplateRef } from '@angular/core';
import { HttpService } from '../../../http.service';
import { User } from '../../../Models/User';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

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

  constructor(private httpService: HttpService, private route: ActivatedRoute)
  {    
    this.routeSubscription = route.params.subscribe(params => this.id = params['id']);    
  }  
  ngOnInit() {
    if (this.id != undefined) {
      this.httpService.DeleteUser(this.id).subscribe(() => { this.id = undefined; this.ngOnInit() }, error => console.log(error));
    }
    this.httpService.getUsers().subscribe(data => { this.users = data["obj"]; console.log(this.users); }, error => console.log(error));
  }
  ngOnDestroy() {
    
  }  
}
