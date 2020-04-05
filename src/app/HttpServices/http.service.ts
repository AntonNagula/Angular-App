import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EnterData } from '../Models/EnterData';
import { User } from '../Models/User';
import { Role } from '../Models/Role';
import { Country } from '../Models/Country';
import { Hotel } from '../Models/Hotel';
import { Voucher } from '../Models/Voucher';

@Injectable()
export class HttpService {

  constructor(private http: HttpClient) { }

  postData(user: EnterData) {
    const body = { login: user.login, password: user.password, role: user.role };
    return this.http.post('https://localhost:44327/api/users/auth', body);
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


  getCountries() {
    return this.http.get('https://localhost:44327/api/contries');
  }

  GetCountry(id: string){
    return this.http.get('https://localhost:44327/api/contries/' + id);
  }

  CreateCountry(country: Country) {
    const body = { name: country.name, hasSea: country.hasSea, img: country.img };
    return this.http.post('https://localhost:44327/api/contries', body);
  }

  UpdateCountry(country: Country) {
    const body = { countryId: country.countryId, name: country.name, hasSea: country.hasSea, img: country.img };
    return this.http.put('https://localhost:44327/api/contries', body);
  }

  DeleteCountry(id: string) {
    return this.http.delete('https://localhost:44327/api/contries/' + id);
  }


  getCities() {
    return this.http.get('https://localhost:44327/api/cities');
  }

  //GetCountry(id: string) {
  //  return this.http.get('https://localhost:44327/api/contries/' + id);
  //}

  //CreateCountry(country: Country) {
  //  const body = { name: country.name, hasSea: country.hasSea, img: country.img };
  //  return this.http.post('https://localhost:44327/api/contries', body);
  //}

  //UpdateCountry(country: Country) {
  //  const body = { countryId: country.countryId, name: country.name, hasSea: country.hasSea, img: country.img };
  //  return this.http.put('https://localhost:44327/api/contries', body);
  //}

  //DeleteCountry(id: string) {
  //  return this.http.delete('https://localhost:44327/api/contries/' + id);
  //}



  getHotels() {
    return this.http.get('https://localhost:44327/api/hotels');
  }

  GetHotel(id: string) {
    return this.http.get('https://localhost:44327/api/hotels/' + id);
  }

  UpdateHotel(hotel: Hotel) {
    const body = {
      country: hotel.country, countryId: hotel.countryId, facilities: hotel.facilities,
      hasBeach: hotel.hasBeach, hotelId: hotel.hotelId, img: hotel.img,
      name: hotel.name, pricePerDay: hotel.pricePerDay, stars: hotel.stars
    };
    return this.http.put('https://localhost:44327/api/hotels', body);
  }

  DeleteHotel(id: string) {
    return this.http.delete('https://localhost:44327/api/hotels/' + id);
  }
  CreateHotel(hotel: Hotel) {
    const body = {
      country: hotel.country, city: hotel.city,countryId: hotel.countryId, cityId: hotel.cityId, facilities: hotel.facilities,
      hasBeach: hotel.hasBeach, img: hotel.img,
      name: hotel.name, pricePerDay: hotel.pricePerDay, stars: hotel.stars
    };
    return this.http.post('https://localhost:44327/api/hotels', body);
  }

  getTours() {
    return this.http.get('https://localhost:44327/api/tours');
  }
  getTour(id: string) {
    return this.http.get('https://localhost:44327/api/tours/' + id);
  }

  //GetHotel(id: string) {
  //  return this.http.get('https://localhost:44327/api/hotels/' + id);
  //}

  //UpdateHotel(hotel: Hotel) {
  //  const body = {
  //    country: hotel.country, countryId: hotel.countryId, facilities: hotel.facilities,
  //    hasBeach: hotel.hasBeach, hotelId: hotel.hotelId, img: hotel.img,
  //    name: hotel.name, pricePerDay: hotel.pricePerDay, stars: hotel.stars
  //  };
  //  return this.http.put('https://localhost:44327/api/hotels', body);
  //}

  //DeleteHotel(id: string) {
  //  return this.http.delete('https://localhost:44327/api/hotels/' + id);
  //}
  CreateVoucher(voucher: Voucher) {
    const body = {
      userName: voucher.userName, userSurname: voucher.userSurname, tourId: voucher.tourId};
    return this.http.post('https://localhost:44327/api/vouchers', body);
  }
}
