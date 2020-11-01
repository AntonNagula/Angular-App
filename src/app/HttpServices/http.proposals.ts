import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Proposal } from '../Models/Proposal';

@Injectable()
export class HttpProposalService {

  constructor(private http: HttpClient) { }

  Headers(): HttpHeaders {
    let bearer = "Bearer " + localStorage.getItem('accessToken');
    let headers = new HttpHeaders({ "Authorization": bearer });
    return headers;
  }

  getProposals() {
    return this.http.get('http://localhost:54717/api/proposal', { headers: this.Headers() });
  }

  getUserProposals() {
    return this.http.get('http://localhost:54717/api/proposal/user', { headers: this.Headers() });
  }

  getProposal(id: string) {
    return this.http.get('http://localhost:54717/api/proposal/' + id, { headers: this.Headers() });
  }

  postProposal(proposal: Proposal) {
    return this.http.post('http://localhost:54717/api/proposal', proposal, { headers: this.Headers() });
  }
  putProposal(proposal: Proposal) {
    console.log(proposal);
    return this.http.put('http://localhost:54717/api/proposal', proposal, { headers: this.Headers() });
  }
  deleteProposal(id: string) {
    return this.http.delete('http://localhost:54717/api/proposal/' + id, { headers: this.Headers() });
  }
}
