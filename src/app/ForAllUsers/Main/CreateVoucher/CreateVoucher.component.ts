import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../HttpServices/http.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
@Component({
  selector: 'CreateVoucher-app',
  templateUrl: './CreateVoucher.component.html',
  styleUrls: ['./CreateVoucher.component.css'],
  providers: [HttpService]
})
export class CreateVoucherComponent {
  id: string;
  private routeSubscription: Subscription;


  constructor(private httpService: HttpService, private route: ActivatedRoute) {
    this.routeSubscription = route.params.subscribe(params => this.id = params['id']);
  }
  submit() {
    console.log(localStorage.getItem('UserId'));
    //this.httpService.CreateHotel(hotel).subscribe(
    //  () => { }, error => console.log(error));
  }
}
