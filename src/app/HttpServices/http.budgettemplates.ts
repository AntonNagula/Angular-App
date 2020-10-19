import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BudgetTemplate } from '../Models/BudgetTemplate';

@Injectable()
export class HttpBudgetTemplateService {

  constructor(private http: HttpClient) { }

  getBudgetTemplates() {
    return this.http.get('http://localhost:54717/api/budgettemplates');
  }
}
