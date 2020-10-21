import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpBudgetTemplateService } from '../../../HttpServices/http.budgettemplates';
import { Budget } from '../../../Models/Budget';
import { BudgetTemplate } from '../../../Models/BudgetTemplate';
import { HttpBudgetService } from '../../../HttpServices/http.budgets';

@Component({
  selector: 'BudgetsView',
  templateUrl: './BudgetsView.component.html',
  styleUrls: ['./BudgetsView.component.css'],
  providers: [HttpBudgetTemplateService, HttpBudgetService]
})
export class BudgetsViewComponent {
  private id: string;
  private timer: any;
  private budgets: Budget[] = [];
  private budgetTemplates: BudgetTemplate[] = [];
  constructor(private httpBudgetTemplateService: HttpBudgetTemplateService, private httpBudgetService: HttpBudgetService,  private router: Router, private route: ActivatedRoute) {
  }

  CreateNewBudgets($event: any): void {
    this.httpBudgetTemplateService
      .getBudgetTemplates()
      .subscribe((data: BudgetTemplate[]) =>
      {
        this.budgetTemplates = data;
        console.log(this.budgetTemplates);        
      },
        error => console.log(error));

    setTimeout(() => this.NewBudgets(), 2000);
    setTimeout(() => this.SendBudgets(), 2000);

    this.router.navigate(
      ['/Client/Budgets']
    );
  }

  SendBudgets() {
    this.httpBudgetService
      .postBudgets(this.budgets)
      .subscribe(() => { },
        error => console.log(error));
  }

  NewBudgets() {
    for (let budgettemplate of this.budgetTemplates) {
      let budget = new Budget();
      budget["amount"] = budgettemplate["amount"];
      budget["remainingAmount"] = budgettemplate["amount"];
      budget["budgetTemplateId"] = budgettemplate["budgetTemplateId"];
      budget["name"] = budgettemplate["name"];
      this.budgets.push(budget);
    }
  }
}
