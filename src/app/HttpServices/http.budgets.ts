import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Budget } from '../Models/Budget';

@Injectable()
export class HttpBudgetService {

  constructor(private http: HttpClient) { }

  Headers(): HttpHeaders {
    let bearer = "Bearer " + localStorage.getItem('accessToken');
    let headers = new HttpHeaders({ "Authorization": bearer });
    return headers;
  }

  getBudgets() {
    return this.http.get('http://localhost:54717/api/budgets', { headers: this.Headers() });
  }

  postBudgets() {
    return this.http.post('http://localhost:54717/api/budgets/addcollection', { headers: this.Headers() });
  }
  putBudget(budget: Budget) {
    return this.http.put('http://localhost:54717/api/budgets', budget, { headers: this.Headers() });
  }
}
