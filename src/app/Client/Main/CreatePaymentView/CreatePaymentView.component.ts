import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Proposal, Statuses } from '../../../Models/Proposal';
import { Subscription } from 'rxjs';
import { HttpPaymentService } from '../../../HttpServices/http.payments';
import { Payment } from '../../../Models/Payment';

@Component({
  selector: 'CreatePaymentView',
  templateUrl: './CreatePaymentView.component.html',
  styleUrls: ['./CreatePaymentView.component.css'],
  providers: [HttpPaymentService]
})
export class CreatePaymentViewComponent {
  payment: Payment = new Payment();
  private routeSubscription: Subscription;
  id: string;
  name: string;

  constructor(private httpProposalService: HttpPaymentService, private route: ActivatedRoute, private router: Router) {
    this.routeSubscription = route.params.subscribe(params => this.id = params['id']);
  }
  
  Close($event: any): void {    
    this.router.navigate(
      ['/Proposals']
    );
  }

  Done($event: any): void {
    alert("hjbjv");
    this.MarkAsDone();
    this.Send();
    console.log(this.id);
    this.router.navigate(
      ['/Client/Proposal/' + this.id]
    );
  }

  MarkAsDone() {
    this.payment["proposalId"] = this.id;
  }

  Send() {
    this.httpProposalService.postProposal(this.payment).subscribe(() => { }, error => console.log(error));
  }
}
