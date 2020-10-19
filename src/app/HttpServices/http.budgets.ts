import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Budget } from '../Models/Budget';

@Injectable()
export class HttpBudgetService {

  constructor(private http: HttpClient) { }

  getBudgets() {
    return this.http.get('http://localhost:54717/api/budgets');
  }

  postBudgets(budgets: Budget[]) {
    return this.http.post('http://localhost:54717/api/budgets/addcollection', budgets);
  }

}
