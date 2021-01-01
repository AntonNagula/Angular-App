import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) { }

  public Token(login: string, password: string) {
    let body = { password: password, login: login };
    this.http.post('http://localhost:54717/token',body)
      .subscribe((res: any) => {
        if (res) {
          let token = res["token"];
          localStorage.clear();
          localStorage.setItem('accessToken', token);
          localStorage.setItem('role', res["role"]);
        }
      })
  }
}
