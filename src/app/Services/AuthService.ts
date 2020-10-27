import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) { }

  public Token(login: string, password: string): void {
    let body = { password: password, login: login };
    this.http.post('http://localhost:54717/token',body)
      .subscribe((res: any) => {
        if (res) {
          let token = res["token"]["result"];          
          localStorage.setItem('accessToken', token);
        }
      })
  }
}
