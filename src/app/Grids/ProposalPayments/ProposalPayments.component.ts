import { Component, OnInit } from '@angular/core';
import { Payment } from '../../Models/Payment';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpProposalService } from '../../HttpServices/http.proposals';
import { Subscription } from 'rxjs';
import { HttpPaymentService } from '../../HttpServices/http.payments';

@Component({
  selector: 'ProposalPaymentsGrid',
  templateUrl: './ProposalPayments.component.html',
  styleUrls: ['./ProposalPayments.component.css'],
  providers: [HttpPaymentService]
})
export class ProposalPaymentsGridComponent implements OnInit {
  payments: Payment[] = [];
  private routeSubscription: Subscription;
  id: string;

  constructor(private httpPaymentService: HttpPaymentService, private router: Router, private route: ActivatedRoute) {
    this.routeSubscription = route.params.subscribe(params => this.id = params['id']);
  }
  ngOnInit() {
    this.httpPaymentService.getPayments(this.id.toString()).subscribe((data: Payment[]) => { this.payments = data; console.log(this.payments); }, error => console.log(error));
  }  
}
