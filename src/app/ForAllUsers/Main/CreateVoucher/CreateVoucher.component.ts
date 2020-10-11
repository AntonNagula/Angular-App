import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../HttpServices/http.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Voucher } from '../../../Models/Voucher';
@Component({
  selector: 'CreateVoucher-app',
  templateUrl: './CreateVoucher.component.html',
  styleUrls: ['./CreateVoucher.component.css'],
  providers: [HttpService]
})
export class CreateVoucherComponent {
  voucher: Voucher = new Voucher();
  id: string;
  status: string;
  private routeSubscription: Subscription;
  constructor(private httpService: HttpService, private route: ActivatedRoute) {
    this.routeSubscription = route.params.subscribe(params => this.id = params['id']);
  }
  submit() {
    this.voucher["userId"] = localStorage.getItem('UserId');
    this.voucher["tourId"] = this.id;
    this.httpService.CreateVoucher(this.voucher);
  }
}
