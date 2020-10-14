import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Proposal } from '../Models/Proposal';

@Injectable()
export class HttpProposalService {

  constructor(private http: HttpClient) { }

  getProposals() {
    return this.http.get('http://localhost:54717/api/proposal');
  }

  postProposal(proposal: Proposal) {
    const body = {
      id: "jhh",
      name: "jj",
      status: proposal.status,
      userName: proposal.userName,
      userSurname: proposal.userSurname,
      purpose: proposal.purpose,
      amount: proposal.amount,
      bankAccount: proposal.bankAccount      
    };
    return this.http.post('http://localhost:54717/api/proposal',body);
  }
}
