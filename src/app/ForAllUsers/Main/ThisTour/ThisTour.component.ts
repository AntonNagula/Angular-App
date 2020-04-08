import { Component, OnInit } from '@angular/core';
import { User } from '../../../Models/User';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Role } from '../../../Models/Role';
import { HttpService } from '../../../HttpServices/http.service';
import { Tour } from '../../../Models/Tour';

@Component({
  selector: 'ThisTour-app',
  templateUrl: './ThisTour.component.html',
  styleUrls: ['./ThisTour.component.css'],
  providers: [HttpService]
})
export class ThisTourComponent implements OnInit
{
  _tour: Tour = new Tour();
  id: string;    
  private routeSubscription: Subscription;
  constructor(private httpService: HttpService, private route: ActivatedRoute, private Router: Router)
  {
    this.routeSubscription = route.params.subscribe(params => this.id = params['id']);
  }

  Voucher() {
    this.goToRegistryVoucher(this._tour.tourId);
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
      console.log(data);
    }, error => console.log(error));
  }
  goToRegistryVoucher(id: string) {
    this.Router.navigate(
      ['/MainForAllUsers/CreateVoucher/' + id]
    );
  }
  goToWeatherOfThisCity(city: string) {
    this.Router.navigate(
      ['/MainForAllUsers/Weather/' + city]
    );
  }
}
