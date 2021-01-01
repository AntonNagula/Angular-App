import { Component, OnInit } from '@angular/core';
import { Proposal, Statuses } from '../../Models/Proposal';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { HttpBudgetService } from '../../HttpServices/http.budgets';
import { Budget } from '../../Models/Budget';

@Component({
  selector: 'BudgetsGrid',
  templateUrl: './BudgetsGrid.component.html',
  styleUrls: ['./BudgetsGrid.component.css'],
  providers: [HttpBudgetService]
})
export class BudgetsGridComponent implements OnInit {
  budgets: Budget[] = [];
  enableEdit: boolean = false;
  id: string;
  private routeSubscription: Subscription;

  constructor(private httpBudgetService: HttpBudgetService, private router: Router, private route: ActivatedRoute) {

  }
  ngOnInit() {
    this.httpBudgetService.getBudgets().subscribe((data: any) => { this.budgets = data; console.log(data); }, error => console.log(error));
  }
  
  Edit(i: number): void {
    this.router.navigate(
      ['/Reply/' + i.toString()]
    );
  }
  Deactivate(i: number): void {
    this.budgets[i]["enabled"] = false;
    this.httpBudgetService.putBudget(this.budgets[i]).subscribe(() => { }, error => console.log(error));
    window.location.reload();
  }
}
