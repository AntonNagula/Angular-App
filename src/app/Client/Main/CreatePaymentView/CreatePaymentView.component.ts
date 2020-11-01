import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { HttpPaymentService } from '../../../HttpServices/http.payments';
import { Payment } from '../../../Models/Payment';
import { Budget } from '../../../Models/Budget';
import { HttpBudgetService } from '../../../HttpServices/http.budgets';

@Component({
  selector: 'CreatePaymentView',
  templateUrl: './CreatePaymentView.component.html',
  styleUrls: ['./CreatePaymentView.component.css'],
  providers: [HttpPaymentService, HttpBudgetService]
})
export class CreatePaymentViewComponent implements OnInit {
  budgets: Budget[] = [];
  payment: Payment = new Payment();
  private routeSubscription: Subscription;
  id: string;
  name: string;

  constructor(private httpPaymentService: HttpPaymentService, private httpBudgetService: HttpBudgetService, private route: ActivatedRoute, private router: Router) {
    this.routeSubscription = route.params.subscribe(params => this.id = params['id']);
  }
  ngOnInit() {
    this.httpBudgetService.getBudgets().subscribe((data: Budget[]) => { this.budgets = data; console.log(this.budgets); }, error => console.log(error));
  }
  Close($event: any): void {    
    setTimeout(() => this.ToRoute(), 1000);    
  }

  Done($event: any): void {
    this.MarkAsDone();
    this.Answers();
    if (!this.Validation())
    {
      alert("Денег не хватает в данном бюджете");
      return;
    }
    this.Send();
    setTimeout(() => this.ToRoute(), 1000);    
  }
  Answers() {
    this.payment["budgetId"] = +this.payment["budgetId"];
    this.payment["amount"] = +this.payment["amount"];
  }
  MarkAsDone() {
    this.payment["proposalId"] = +this.id;
  }
  Send() {
    this.httpPaymentService.postPayment(this.payment).subscribe(() => { }, error => console.log(error));
  }
  Validation(): boolean {
    let budget = this.budgets.find(x => x.budgetId == this.payment["budgetId"]);
    if (budget["amount"] < this.payment["amount"])
      return false;
    else
      return true;
  }
  ToRoute(): void {
    this.router.navigate(
      ['/Client/Proposal/' + this.id]
    );
  }
}
