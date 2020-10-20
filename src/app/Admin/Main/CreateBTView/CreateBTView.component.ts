import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { BudgetTemplate } from '../../../Models/BudgetTemplate';
import { HttpBudgetTemplateService } from '../../../HttpServices/http.budgettemplates';

@Component({
  selector: 'CreateBTView',
  templateUrl: './CreateBTView.component.html',
  styleUrls: ['./CreateBTView.component.css'],
  providers: [HttpBudgetTemplateService]
})
export class CreateBTViewComponent implements OnInit {
  budgetTemplate: BudgetTemplate = new BudgetTemplate();
  private routeSubscription: Subscription;
  id: string;
  name: string;

  constructor(private httpBudgetTemplateService:HttpBudgetTemplateService,private route: ActivatedRoute, private router: Router) {
    this.routeSubscription = route.params.subscribe(params => this.id = params['id']);
  }
  ngOnInit() {
    if (this.id !== undefined)
      this.httpBudgetTemplateService.getBudgetTemplate(this.id).subscribe((data: BudgetTemplate) => { this.budgetTemplate = data; console.log(this.budgetTemplate); }, error => console.log(error));
  }
  Close($event: any): void {
    this.ToBTs();
  }
  Done($event: any): void {
    console.log(this.id);
    if (this.id !== undefined)
      this.httpBudgetTemplateService.putBudgetTemplates(this.budgetTemplate).subscribe(() => { }, error => console.log(error));
    else
      this.httpBudgetTemplateService.postBudgetTemplates(this.budgetTemplate).subscribe(() => { }, error => console.log(error));
    setTimeout(() => this.ToBTs(), 2000);  
  }
  ToBTs() {
    this.router.navigate(
      ['/Admin/BTs']
    );
  }
}
