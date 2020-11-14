import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Purpose } from '../Models/Purpose';

@Injectable()
export class HttpPurposeService {

  constructor(private http: HttpClient) { }

  Headers(): HttpHeaders {
    let bearer = "Bearer " + localStorage.getItem('accessToken');
    let headers = new HttpHeaders({ "Authorization": bearer });
    return headers;
  }

  getPurposes() {
    return this.http.get('http://localhost:54717/api/purpose', { headers: this.Headers() });
  }

  getPurpose(id: string) {
    return this.http.get('http://localhost:54717/api/purpose/' + id, { headers: this.Headers() });
  }

  postPurpose(purpose: Purpose) {
    return this.http.post('http://localhost:54717/api/purpose', purpose, { headers: this.Headers() });
  }
  putPurpose(purpose: Purpose) {
    console.log(purpose);
    return this.http.put('http://localhost:54717/api/purpose', purpose, { headers: this.Headers() });
  }
  deletePurpose(id: string) {
    return this.http.delete('http://localhost:54717/api/purpose/' + id, { headers: this.Headers() });
  }
}
