import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../Models/User';

@Injectable()
export class HttpUserService {

  constructor(private http: HttpClient) { }
  getRoles() {
    return this.http.get('http://localhost:54717/api/roles');
  }
  getUsers() {
    return this.http.get('http://localhost:54717/api/user');
  }
  getUser(id:string) {
    return this.http.get('http://localhost:54717/api/user/'+id);
  }
  postUser(user: User) {
    return this.http.post('http://localhost:54717/api/user', user);
  }
  deleteUser(id:string) {
    return this.http.delete('http://localhost:54717/api/user/'+id);
  }
  putUser(user:User) {
    return this.http.put('http://localhost:54717/api/user/' + user["userId"], user);
  }
}
