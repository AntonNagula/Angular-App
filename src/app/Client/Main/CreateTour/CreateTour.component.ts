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
  tour: Tour  = new Tour();
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
}
