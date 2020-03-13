import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../../Models/User';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Role } from '../../../Models/Role';
import { HttpService } from '../../../HttpServices/http.service';

@Component({
  selector: 'CreateRole-app',
  templateUrl: './CreateRole.component.html',
  styleUrls: ['./CreateRole.component.css'],
  providers: [HttpService]
})
export class CreateRoleComponent
{
  newRole: Role = new Role();
  private routeSubscription: Subscription;

 
  constructor(private httpService: HttpService, private route: ActivatedRoute)
  {
    
  }
  submit(role: Role) {
    this.httpService.CreateRole(role).subscribe(
      () => { }, error => console.log(error));
  }

}
