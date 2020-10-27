import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../Models/User';

@Injectable()
export class HttpUserService {

  constructor(private http: HttpClient) { }

  Headers(): HttpHeaders {
    let bearer = "Bearer " + localStorage.getItem('accessToken');
    let headers = new HttpHeaders({ "content-type": "application/x-www-form-urlencoded", "Authorization": bearer });
    return headers;
  }

  getRoles() {
    return this.http.get('http://localhost:54717/api/roles', { headers: this.Headers() });
  }
  getUsers() {
    return this.http.get('http://localhost:54717/api/user', { headers: this.Headers() });
  }
  getUser(id:string) {
    return this.http.get('http://localhost:54717/api/user/' + id, { headers: this.Headers() });
  }
  postUser(user: User) {
    return this.http.post('http://localhost:54717/api/user', user, { headers: this.Headers() });
  }
  deleteUser(id:string) {
    return this.http.delete('http://localhost:54717/api/user/' + id, { headers: this.Headers() });
  }
  putUser(user:User) {
    return this.http.put('http://localhost:54717/api/user/' + user["userId"], user, { headers: this.Headers() });
  }
}
