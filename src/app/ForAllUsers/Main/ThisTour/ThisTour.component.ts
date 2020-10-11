import { Component, OnInit } from '@angular/core';
import { User } from '../../../Models/User';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Role } from '../../../Models/Role';
import { HttpService } from '../../../HttpServices/http.service';
import { Tour } from '../../../Models/Tour';
import { Voucher } from '../../../Models/Voucher';

@Component({
  selector: 'ThisTour-app',
  templateUrl: './ThisTour.component.html',
  styleUrls: ['./ThisTour.component.css'],
  providers: [HttpService]
})
export class ThisTourComponent implements OnInit
{
  _voucher: Voucher = new Voucher();
  _tour: Tour = new Tour();
  _status: string;
  id: string;    
  private routeSubscription: Subscription;
  constructor(private httpService: HttpService, private route: ActivatedRoute, private Router: Router)
  {
    this.routeSubscription = route.params.subscribe(params => this.id = params['id']);
  }

  Voucher() {
    this._voucher["userId"] = localStorage.getItem('UserId');
    if (this._voucher["userId"] == undefined)
    {
      this.goToRegistration();
    }
    this._voucher["tourId"] = this.id;
    this.httpService.CreateVoucher(this._voucher).subscribe(
      (data) => { console.log(data) }, error => console.log(error));
  }

  Weather() {
    this.goToWeatherOfThisCity(this._tour.engNameOfCity);
  }
  ngOnInit() {

    this.httpService.getTour(this.id).subscribe(data =>
    {
      this._tour["name"] = data["name"];
      this._tour["city"] = data["city"];
      this._tour["engNameOfCity"] = data["engNameOfCity"];
      this._tour["country"] = data["country"];
      this._tour["hotel"] = data["hotel"];
      this._tour["tourId"] = data["tourId"];      
    }, error => console.log(error));
  }
  goToRegistration() {
    this.Router.navigate(
      ['/MainForAllUsers/Registartion']
    );
  }
  goToWeatherOfThisCity(city: string) {
    this.Router.navigate(
      ['/MainForAllUsers/Weather/' + city]
    );
  }
}
