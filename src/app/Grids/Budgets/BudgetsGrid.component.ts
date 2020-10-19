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
    this.httpBudgetService.getBudgets().subscribe((data: Budget[]) => { this.budgets = data; console.log(this.budgets); }, error => console.log(error));
  }
  
  //Delete(i: number): void {
  //  this.httpProposalService.deleteProposal(i.toString()).subscribe(() => { }, error => console.log(error));
  //  this.router.navigate(
  //    ['/Proposals']
  //  );
  //}
  Edit(i: number): void {
    this.router.navigate(
      ['/Reply/' + i.toString()]
    );
  }
}
