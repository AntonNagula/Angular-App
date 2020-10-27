import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Budget } from '../Models/Budget';

@Injectable()
export class HttpBudgetService {

  constructor(private http: HttpClient) { }

  Headers(): HttpHeaders {
    let bearer = "Bearer " + localStorage.getItem('accessToken');
    let headers = new HttpHeaders({ "content-type": "application/x-www-form-urlencoded", "Authorization": bearer });
    return headers;
  }

  getBudgets() {
    return this.http.get('http://localhost:54717/api/budgets', { headers: this.Headers() });
  }

  postBudgets(budgets: Budget[]) {
    return this.http.post('http://localhost:54717/api/budgets/addcollection', budgets, { headers: this.Headers() });
  }

}
