import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Budget } from '../Models/Budget';

@Injectable()
export class HttpBudgetService {

  constructor(private http: HttpClient) { }

  getBudgets() {
    return this.http.get('http://localhost:54717/api/budgettemplates');
  }

  getProposal(id: string) {
    return this.http.get('http://localhost:54717/api/proposal/'+id);
  }

  //postProposal(proposal: Proposal) {
  //  return this.http.post('http://localhost:54717/api/proposal', proposal);
  //}

  deleteProposal(id: string) {
    return this.http.delete('http://localhost:54717/api/proposal/'+id);
  }
}
