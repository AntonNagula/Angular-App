import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpBudgetTemplateService } from '../../../HttpServices/http.budgettemplates';
import { BudgetTemplate } from '../../../Models/BudgetTemplate';

@Component({
  selector: 'PurposesView',
  templateUrl: './PurposesView.component.html',
  styleUrls: ['./PurposesView.component.css'],
  providers: [HttpBudgetTemplateService]
})
export class PurposesViewComponent {
 
  constructor(private httpBudgetTemplateService: HttpBudgetTemplateService, private router: Router, private route: ActivatedRoute) {
  }
  
  CreatePurpose($event: any): void {   
    this.router.navigate(
      ['/Admin/CreatePurpose']
    );
  }

}
