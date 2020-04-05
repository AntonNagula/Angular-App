import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../HttpServices/http.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Country } from '../../../Models/Country';
import { Hotel } from '../../../Models/Hotel';
import { City } from '../../../Models/City';

@Component({
  selector: 'CreateHotel-app',
  templateUrl: './CreateHotel.component.html',
  styleUrls: ['./CreateHotel.component.css'],
  providers: [HttpService]
})
export class CreateVoucherComponent implements OnInit {
  countries: Country[] = [];
  cities: City[] = [];
  hotel: Hotel = new Hotel();
  id: string;
  isTrue: boolean;
  private routeSubscription: Subscription;


  constructor(private httpService: HttpService, private route: ActivatedRoute) {
    this.routeSubscription = route.params.subscribe(params => this.id = params['id']);
  }
  submit(hotel: Hotel) {
    this.httpService.CreateHotel(hotel).subscribe(
      () => { }, error => console.log(error));
  }
  ngOnInit() {

    this.httpService.getCities().subscribe(data => { this.cities = data["obj"]; console.log(this.cities); }, error => console.log(error));
    this.httpService.getCountries().subscribe(data => { this.countries = data["obj"]; console.log(this.countries); }, error => console.log(error));
  }
}
