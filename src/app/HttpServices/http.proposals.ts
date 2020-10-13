import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EnterData } from '../Models/EnterData';
import { User } from '../Models/User';
import { Role } from '../Models/Role';
import { Country } from '../Models/Country';
import { Hotel } from '../Models/Hotel';
import { Voucher } from '../Models/Voucher';
import { Tour } from '../Models/Tour';
import { ChoisenCriterials } from '../Models/ChoisenCriterials';

@Injectable()
export class HttpProposalService {

  constructor(private http: HttpClient) { }

  getProposals() {
    return this.http.get('http://localhost:54717/api/proposal');
  }  
}
