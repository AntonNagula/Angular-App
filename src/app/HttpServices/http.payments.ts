import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Payment } from '../Models/Payment';

@Injectable()
export class HttpPaymentService {

  constructor(private http: HttpClient) { }

  getPayments(id:string) {
    return this.http.get('http://localhost:54717/api/payment/'+id);
  }

  postPayment(payment: Payment) {
    return this.http.post('http://localhost:54717/api/payment', payment);
  }
}
