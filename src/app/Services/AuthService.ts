import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) { }

  public Token():void {
    this.http.get('http://localhost:54717/token')
      .subscribe((res: any) => {
        if (res) {
          let token = res["token"];          
          localStorage.setItem('accessToken', token);
        }
      })
  }
}
