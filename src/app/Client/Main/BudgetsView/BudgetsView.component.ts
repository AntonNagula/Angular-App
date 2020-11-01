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
  providers: [HttpBudgetService]
})
export class BudgetsViewComponent {
  private budgets: Budget[] = [];
  constructor(private httpBudgetService: HttpBudgetService,  private router: Router, private route: ActivatedRoute) {
  }

  CreateNewBudgets($event: any): void {
    this.SendBudgets();
    setTimeout(() => this.Reload(), 2000);
  }

  SendBudgets() {
    this.httpBudgetService
      .postBudgets()
      .subscribe(() => { },
        error => console.log(error));
  }
  Reload() {
    window.location.reload();
  }
}
