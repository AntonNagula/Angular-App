import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Proposal } from '../Models/Proposal';

@Injectable()
export class HttpProposalService {

  constructor(private http: HttpClient) { }

  getProposals() {
    return this.http.get('http://localhost:54717/api/proposal');
  }

  getProposal(id: string) {
    return this.http.get('http://localhost:54717/api/proposal/'+id);
  }

  postProposal(proposal: Proposal) {
    return this.http.post('http://localhost:54717/api/proposal', proposal);
  }

  deleteProposal(id: string) {
    return this.http.delete('http://localhost:54717/api/proposal/'+id);
  }
}
