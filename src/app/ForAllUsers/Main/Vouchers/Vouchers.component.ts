import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../../../HttpServices/http.service';
import { Tour } from '../../../Models/Tour';
import { Country } from '../../../Models/Country';
import { ChoisenCriterials } from '../../../Models/ChoisenCriterials';
import { VoucherAndTourInfo } from '../../../Models/VoucherAndTourInfo';

@Component({
  selector: 'Vouchers-app',
  templateUrl: './Vouchers.component.html',
  styleUrls: ['./Vouchers.component.css'],
  providers: [HttpService]
})
export class VouchersComponent implements OnInit
{
  _VoucherAndTourInfo: VoucherAndTourInfo[] = [];
  _choisenCriterials: ChoisenCriterials = new ChoisenCriterials();
  Contry: string;
  _UserId: string;
  private routeSubscription: Subscription;

  constructor(private httpService: HttpService, private route: ActivatedRoute, private router: Router)
  {    
    
  }  
  ngOnInit() {
    this._UserId = localStorage.getItem('UserId');
    this.httpService.GetActualVouchersByUserId(this._UserId).subscribe((data: VoucherAndTourInfo[]) => { this._VoucherAndTourInfo = data; }, error => console.log(error));
  }
  ContryName(id: number): string {
    return this._VoucherAndTourInfo[id]["name"];
  }
  //TourContryname(id: number): string {
  //  return this.tours[id]["country"];
  //}
  //TourId(id: number): string {
  //  return this.tours[id]["tourId"];
  //}
  TourCityname(id: number): string {
    return this._VoucherAndTourInfo[id]["city"];
  }
  TourContryImgName(id: number): string {
    return "assets/страны/" + this._VoucherAndTourInfo[id]["country"] + ".jpg";
  }
  Submit(id: number)
  {
    this.httpService.DeleteVoucher(this._VoucherAndTourInfo[id]["voucherId"]).subscribe(data => { }, error => console.log(error));
    this.httpService.GetActualVouchersByUserId(this._UserId).subscribe((data: VoucherAndTourInfo[]) => { this._VoucherAndTourInfo = data; }, error => console.log(error));
    
  }
}
