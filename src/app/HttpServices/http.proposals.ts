import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpProposalService {

  constructor(private http: HttpClient) { }

  getProposals() {
    return this.http.get('http://localhost:54717/api/proposal');
  }  
}
