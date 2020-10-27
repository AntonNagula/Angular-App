import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Payment } from '../Models/Payment';

@Injectable()
export class HttpPaymentService {

  constructor(private http: HttpClient) { }

  Headers(): HttpHeaders {
    let bearer = "Bearer " + localStorage.getItem('accessToken');
    let headers = new HttpHeaders({ "content-type": "application/x-www-form-urlencoded", "Authorization": bearer });
    return headers;
  }

  getPayments(id:string) {
    return this.http.get('http://localhost:54717/api/payment/' + id, { headers: this.Headers() });
  }

  postPayment(payment: Payment) {
    return this.http.post('http://localhost:54717/api/payment', payment, { headers: this.Headers() });
  }
}
