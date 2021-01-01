import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { HttpPaymentService } from '../../../HttpServices/http.payments';
import { Payment } from '../../../Models/Payment';
import { Budget } from '../../../Models/Budget';
import { HttpBudgetService } from '../../../HttpServices/http.budgets';
import { HttpProposalService } from '../../../HttpServices/http.proposals';
import { Proposal, Statuses } from '../../../Models/Proposal';

@Component({
  selector: 'CreatePaymentView',
  templateUrl: './CreatePaymentView.component.html',
  styleUrls: ['./CreatePaymentView.component.css'],
  providers: [HttpPaymentService, HttpBudgetService, HttpProposalService]
})
export class CreatePaymentViewComponent implements OnInit {
  budgets: Budget[] = [];
  payments: Payment[] = [];
  payment: Payment = new Payment();
  proposal: Proposal = new Proposal();
  private routeSubscription: Subscription;
  id: string;
  name: string;

  constructor(private httpPaymentService: HttpPaymentService, private httpBudgetService: HttpBudgetService, private httpProposalService: HttpProposalService, private route: ActivatedRoute, private router: Router) {
    this.routeSubscription = route.params.subscribe(params => this.id = params['id']);
  }
  ngOnInit() {
    this.httpBudgetService.getBudgetsPayment().subscribe((data: Budget[]) => { this.budgets = data; console.log(this.budgets); }, error => console.log(error));
    this.httpProposalService.getProposal(this.id).subscribe((data: Proposal) => { this.proposal = data; console.log(this.proposal); }, error => console.log(error));
    this.httpPaymentService.getPayments(this.id).subscribe((data: Payment[]) => { this.payments = data; console.log(this.payments); }, error => console.log(error));
  }

  Close($event: any): void {
    setTimeout(() => this.ToRoute(), 1000);
  }

  Done($event: any): void {
    if (!this.Validation()) {
      return;
    }
    this.SetProposal();
    this.Answers();
    this.Send();
    setTimeout(() => this.ToRoute(), 1000);
  }
  Answers() {
    this.payment["budgetId"] = +this.payment["budgetId"];
    this.payment["amount"] = +this.payment["amount"];
  }
  SetProposal() {
    this.payment["proposalId"] = +this.id;
  }
  Send() {
    this.httpPaymentService.postPayment(this.payment).subscribe(() => { }, error => console.log(error));
  }
  Validation(): boolean {
    let sum = 0;
    let flag = true;
    let budget = this.budgets.find(x => x.budgetId == this.payment["budgetId"]);
    if (budget["amount"] < this.payment["amount"]) {
      flag = false;
      alert("Денег не хватает в данном бюджете");
    }
    for (var i = 0; i < this.payments.length; i++) {
      sum += this.payments[i]["amount"];
    }
    sum += +this.payment["amount"];
    if (this.proposal["amount"] < sum) {
      alert("Суммарный платеж превышает, сумму запроса");
      flag = false;
    }
    return flag;
  }
  ToRoute(): void {
    this.router.navigate(
      ['/Admin/Proposal/' + this.id]
    );
  }
}
