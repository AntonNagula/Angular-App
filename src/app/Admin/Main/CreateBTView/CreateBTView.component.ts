import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { BudgetTemplate } from '../../../Models/BudgetTemplate';

@Component({
  selector: 'CreateBTView',
  templateUrl: './CreateBTView.component.html',
  styleUrls: ['./CreateBTView.component.css']
})
export class CreateBTViewComponent {
  budgetTemplate: BudgetTemplate = new BudgetTemplate();
  private routeSubscription: Subscription;
  id: string;
  name: string;

  constructor(private route: ActivatedRoute, private router: Router) {
    //this.routeSubscription = route.params.subscribe(params => this.id = params['id']);
  }
  
  Close($event: any): void {    
    this.router.navigate(
      ['/Proposals']
    );
  }

  Done($event: any): void {
    console.log(this.id);
    this.router.navigate(
      ['/Client/Proposal/' + this.id]
    );
  }
}
