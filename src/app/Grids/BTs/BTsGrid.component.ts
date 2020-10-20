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
