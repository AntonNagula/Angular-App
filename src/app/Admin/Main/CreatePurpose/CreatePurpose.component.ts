import { Component, OnInit } from '@angular/core';
import { User } from '../../../Models/User';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Role } from '../../../Models/Role';
import { HttpPurposeService } from '../../../HttpServices/http.purpose';
import { Purpose } from '../../../Models/Purpose';

@Component({
  selector: 'CreatePurpose',
  templateUrl: './CreatePurpose.component.html',
  styleUrls: ['./CreatePurpose.component.css'],
  providers: [HttpPurposeService]
})
export class CreatePurposeComponent implements OnInit {
  purpose: Purpose = new Purpose();
  id: string;
  private routeSubscription: Subscription;
  constructor(private httpPurposeService: HttpPurposeService, private route: ActivatedRoute, private router: Router) {
    this.routeSubscription = route.params.subscribe(params => this.id = params['id']);
  }
  
  ngOnInit() {
    if (this.id !== undefined) {
      this.httpPurposeService.getPurpose(this.id).subscribe((data: Purpose) => { this.purpose = data; }, error => console.log(error));
    }
  }

  submit($event: any) {
    this.httpPurposeService.postPurpose(this.purpose).subscribe(
      () => { }, error => console.log(error));

    setTimeout(() => this.Route(), 2000);
  }

  Route() {
    this.router.navigate(
      ['/Admin/Purposes']
    );
  }
}
