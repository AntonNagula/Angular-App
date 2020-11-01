import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BudgetTemplate } from '../Models/BudgetTemplate';

@Injectable()
export class HttpBudgetTemplateService {

  constructor(private http: HttpClient) { }

  Headers(): HttpHeaders {
    let bearer = "Bearer " + localStorage.getItem('accessToken');
    let headers = new HttpHeaders({ "Authorization": bearer });
    return headers;
  }

  getBudgetTemplates() {
    return this.http.get('http://localhost:54717/api/budgettemplates', { headers: this.Headers() });
  }
  getBudgetTemplate(id:string) {
    return this.http.get('http://localhost:54717/api/budgettemplates/' + id, { headers: this.Headers() });
  }
  postBudgetTemplates(budgetTemplate: BudgetTemplate) {
    return this.http.post('http://localhost:54717/api/budgettemplates', budgetTemplate, { headers: this.Headers() });
  }
  deleteBudgetTemplate(id:string) {
    return this.http.delete('http://localhost:54717/api/budgettemplates/' + id, { headers: this.Headers() });
  }
  putBudgetTemplates(budgetTemplate: BudgetTemplate) {
    return this.http.put('http://localhost:54717/api/budgettemplates/' + budgetTemplate["id"], budgetTemplate, { headers: this.Headers() });
  }
}
