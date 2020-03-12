import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EnterData } from './Models/EnterData';
import { User } from './Models/User';
import { Role } from './Models/Role';
import { Country } from './Models/Country';

@Injectable()
export class HttpService {

  constructor(private http: HttpClient) { }

  postData(user: EnterData) {
    const body = { name: user.name, age: user.age };
    return this.http.post('https://localhost:44327/api/users', body);
  }

  CreateUser(user: User) {
    const body = { name: user.name, surname: user.surname, password: user.password, email: user.email, roleId: user.roleId };
    return this.http.post('https://localhost:44327/api/users', body);
  }

  UpdateUser(user: User) {
    const body = { id: user.id, name: user.name, surname: user.surname, password: user.password, email: user.email, role: user.role };
    return this.http.put('https://localhost:44327/api/users', body);
  }

  DeleteUser(id: string) {
    return this.http.delete('https://localhost:44327/api/users/' + id);
  }

  getUsers() {       
    return this.http.get('https://localhost:44327/api/users');
  }


  getRoles() {
    return this.http.get('https://localhost:44327/api/roles');
  }

  CreateRole(role: Role) {
    const body = { roleName: role.roleName };
    return this.http.post('https://localhost:44327/api/roles', body);
  }

  CreateCountry(country: Country) {
    const body = { name: country.name, hasSea: country.hasSea, img: country.img };
    return this.http.post('https://localhost:44327/api/contries', body);
  }
}
