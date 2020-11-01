import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpBudgetTemplateService } from '../../../HttpServices/http.budgettemplates';
import { BudgetTemplate } from '../../../Models/BudgetTemplate';

@Component({
  selector: 'BTsView',
  templateUrl: './BTsView.component.html',
  styleUrls: ['./BTsView.component.css'],
  providers: [HttpBudgetTemplateService]
})
export class BTsViewComponent {
 
  constructor(private httpBudgetTemplateService: HttpBudgetTemplateService, private router: Router, private route: ActivatedRoute) {
  }
  
  CreateNewBT($event: any): void {   
    this.router.navigate(
      ['/Admin/CreationBT']
    );
  }

}
