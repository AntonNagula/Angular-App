import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../HttpServices/http.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Country } from '../../../Models/Country';
import { Hotel } from '../../../Models/Hotel';
import { City } from '../../../Models/City';
import { Tour } from '../../../Models/Tour';

@Component({
  selector: 'CreateTour-app',
  templateUrl: './CreateTour.component.html',
  styleUrls: ['./CreateTour.component.css'],
  providers: [HttpService]
})
export class CreateTourComponent implements OnInit
{
  countries: Country[] = [];
  cities: City[] = [];
  hotels: Hotel[] = [];
  tour: Tour = new Tour();
  price: number;
  numberofnight: number;
  priceTransfer: number;
  markup: number;
  id: string;
  private routeSubscription: Subscription;

 
  constructor(private httpService: HttpService, private route: ActivatedRoute)
  {
    this.routeSubscription = route.params.subscribe(params => this.id = params['id']);
  }
  submit(tour: Tour) {
    this.httpService.CreateTour(tour).subscribe(
      () => { }, error => console.log(error));
  }
  ngOnInit() {
    this.httpService.getHotels().subscribe(data => { this.hotels = data["obj"]; console.log(this.hotels); }, error => console.log(error));
    this.httpService.getCities().subscribe(data => { this.cities = data["obj"]; console.log(this.cities); }, error => console.log(error));
    this.httpService.getCountries().subscribe(data => { this.countries = data["obj"]; console.log(this.countries); }, error => console.log(error));
  }
  onCountryChange() {
    this.httpService.getHotelsByCountry(this.tour["countryId"]).subscribe(data => { this.hotels = data["obj"]; console.log(this.hotels); }, error => console.log(error));
    this.httpService.getCitiesByCountry(this.tour["countryId"]).subscribe(data => { this.cities = data["obj"]; console.log(this.cities); }, error => console.log(error)); 
  }
  onCityChange() {
    this.httpService.getHotelsByCity(this.tour["cityId"]).subscribe(data => { this.hotels = data["obj"]; console.log(this.hotels); }, error => console.log(error));
  }
  onHotelChange() {
    this.price = +this.hotels.find(x => x["hotelId"] == this.tour["hotelId"])["pricePerDay"];
    if (this.tour["numberOfNights"] != undefined)
    {
      this.numberofnight = +this.tour["numberOfNights"];
      this.price *= this.numberofnight;
    }
    if (this.tour["priceTransfer"] != undefined)
    {
      this.priceTransfer = +this.tour["priceTransfer"];
      this.price += this.priceTransfer;
    }
    if (this.tour["markup"] != undefined)
    {
      this.markup = +this.tour["markup"];
      this.price += this.markup;
    }
    this.tour["price"] = this.price.toString();
  }
}
