import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BudgetTemplate } from '../Models/BudgetTemplate';

@Injectable()
export class HttpBudgetTemplateService {

  constructor(private http: HttpClient) { }

  getBudgetTemplates() {
    return this.http.get('http://localhost:54717/api/budgettemplates');
  }
  getBudgetTemplate(id:string) {
    return this.http.get('http://localhost:54717/api/budgettemplates/'+id);
  }
  postBudgetTemplates(budgetTemplate: BudgetTemplate) {
    return this.http.post('http://localhost:54717/api/budgettemplates', budgetTemplate);
  }
  deleteBudgetTemplate(id:string) {
    return this.http.delete('http://localhost:54717/api/budgettemplates/'+id);
  }
  putBudgetTemplates(budgetTemplate: BudgetTemplate) {
    return this.http.put('http://localhost:54717/api/budgettemplates/' + budgetTemplate["id"], budgetTemplate);
  }
}
