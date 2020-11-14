import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpProposalService } from '../../../HttpServices/http.proposals';
import { Subscription } from 'rxjs';
import { Proposal, Statuses } from '../../../Models/Proposal';
import { HttpPaymentService } from '../../../HttpServices/http.payments';
import { Payment } from '../../../Models/Payment';

@Component({
  selector: 'ProposalView',
  templateUrl: './ProposalView.component.html',
  styleUrls: ['./ProposalView.component.css'],
  providers: [HttpProposalService, HttpPaymentService]
})
export class ProposalViewComponent implements OnInit {
  private routeSubscription: Subscription;
  proposal: Proposal = new Proposal();
  payments: Payment[] = [];
  private id: string;  

  constructor(private router: Router, private route: ActivatedRoute, private httpProposalService: HttpProposalService, private httpPaymentService: HttpPaymentService) {
    this.routeSubscription = route.params.subscribe(params => this.id = params['id']);
  }

  ngOnInit() {
    this.httpProposalService.getProposal(this.id.toString()).subscribe((data: Proposal) => { this.proposal = data; console.log(this.proposal); }, error => console.log(error));
    this.httpPaymentService.getPayments(this.id).subscribe((data: Payment[]) => { this.payments = data; console.log(this.payments); }, error => console.log(error));
  }

  NameSurname(): string {
    return this.proposal["user"]["name"] + " " + this.proposal["user"]["surname"];
  }

  ToPayment($event: any): void {
    this.router.navigate(
      ['/Admin/CreationPayment/' + this.id]
    );
  }
  Close($event: any): void {
    this.router.navigate(
      ['/Admin/Proposals']
    );
  }
  Deny($event: any): void {
    this.proposal["statusId"] = Statuses.Denied;
    this.httpProposalService.putProposal(this.proposal).subscribe(() => { }, error => console.log(error));
    this.router.navigate(
      ['/Admin/Proposals']
    );
  }
  Approve($event: any): void {
    if (!this.Validation()) {
      return;
    }
    alert("Запрос подтвержден");
    this.proposal["statusId"] = Statuses.Approved;
    this.httpProposalService.putProposal(this.proposal).subscribe(() => {  }, error => console.log(error));
  }
  Validation(): boolean {
    let sum = 0;
    let flag = true;    
    for (var i = 0; i < this.payments.length; i++) {
      sum += +this.payments[i]["amount"];
    }
    if (this.proposal["amount"] != sum) {
      alert("Суммарный платеж не равен запрашиваемой сумме");
      flag = false;
    }
    return flag;
  }
  Visibility(): boolean {
    if (this.proposal.statusId == Statuses.Approved || this.proposal.statusId == Statuses.Denied)
      return false;
    else
      return true;
  }
}
