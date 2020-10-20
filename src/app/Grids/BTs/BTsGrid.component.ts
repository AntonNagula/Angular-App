import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BudgetTemplate } from '../../Models/BudgetTemplate';
import { HttpBudgetTemplateService } from '../../HttpServices/http.budgettemplates';

@Component({
  selector: 'BTsGrid',
  templateUrl: './BTsGrid.component.html',
  styleUrls: ['./BTsGrid.component.css'],
  providers: [HttpBudgetTemplateService]
})
export class BTsGridComponent implements OnInit {
  BTs: BudgetTemplate[] = [];

  constructor(private httpBudgetTemplateService: HttpBudgetTemplateService, private router: Router, private route: ActivatedRoute) {

  }
  ngOnInit() {
    this.httpBudgetTemplateService.getBudgetTemplates().subscribe((data: BudgetTemplate[]) => { this.BTs = data; console.log(this.BTs); }, error => console.log(error));
  }
  
  Delete(i: number): void {
    this.httpBudgetTemplateService.deleteBudgetTemplate(i.toString()).subscribe(() => { }, error => console.log(error));
    setTimeout(() => this.reRoute(), 2000);    
  }
  Edit(i: number): void {
    this.router.navigate(
      ['/Admin/CreationBT/' + i.toString()]
    );
  }
  reRoute() {
    this.router.navigate(
      ['Admin/BTs']
    );
  }
}
