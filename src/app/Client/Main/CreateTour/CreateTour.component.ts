import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../HttpServices/http.service';
import { ActivatedRoute, Router } from '@angular/router';
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
  pricehotel: string="0";
  id: string;
  private routeSubscription: Subscription;

 
  constructor(private httpService: HttpService, private route: ActivatedRoute, private router: Router)
  {
    this.routeSubscription = route.params.subscribe(params => this.id = params['id']);
  }
  submit(tour: Tour) {
    if (this.id != undefined) {
      this.httpService.UpdateTour(tour).subscribe(
        () => { }, error => console.log(error)
      );      
    }
    else {
      tour["endQuantity"] = tour["startQuantity"];
      this.httpService.CreateTour(tour).subscribe(
        () => { }, error => console.log(error));
    }

    this.router.navigate(
      ['/MainClient/Tours']
    );
  }
  ngOnInit() {
    this.httpService.getHotels().subscribe((data: Hotel[]) => { this.hotels = data; console.log(this.hotels); }, error => console.log(error));
    this.httpService.getCities().subscribe((data: City[]) => { this.cities = data; console.log(this.cities); }, error => console.log(error));
    this.httpService.getCountries().subscribe((data: Country[]) => { this.countries = data; console.log(this.countries); }, error => console.log(error));

    if (this.id != undefined) {
      this.httpService.getTour(this.id.toString()).subscribe(data => {
        this.tour.cityId = data["cityId"];
        this.tour.countryId = data["countryId"];
        this.tour.hotelId = data["hotelId"];
        this.tour.endDate = data["endDate"];
        this.tour.markup = data["markup"];
        this.tour.name = data["name"];
        this.tour.numberOfNights = data["numberOfNights"];
        this.tour.price = data["price"];
        this.tour.priceHotel = data["priceHotel"];
        this.tour.priceTransfer = data["priceTransfer"];
        this.tour.startQuantity = data["startQuantity"];
        this.tour.endQuantity = data["endQuantity"];
        this.tour.startDate = data["startDate"];
        this.tour.tourId = this.id;
        console.log(data);
      }, error => console.log(error));
    }
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
    this.pricehotel = this.hotels.find(x => x["hotelId"] == this.tour["hotelId"])["pricePerDay"];
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
