import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../../../HttpServices/http.service';
import { ActivatedRoute, Router } from '@angular/router';
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
export class CreateHotelComponent implements OnInit
{
  countries: Country[] = [];
  cities: City[] = [];
  hotel: Hotel  = new Hotel();
  id: string;
  isTrue: boolean;
  private routeSubscription: Subscription;


  constructor(private httpService: HttpService, private route: ActivatedRoute, private router: Router)
  {
    this.routeSubscription = route.params.subscribe(params => this.id = params['id']);
  }
  submit(hotel: Hotel) {
    if (this.id != undefined) {
      hotel.countryId = this.id;
      console.log(hotel);
      this.httpService.UpdateHotel(hotel).subscribe(
        (data: string) => { console.log(data) }, error => console.log(error));
    }
    else {
      this.httpService.CreateHotel(hotel).subscribe(
        () => { }, error => console.log(error));
    }

    this.router.navigate(
      ['/MainClient/Hotels']
    );
  }
  ngOnInit() {
    this.httpService.getCities().subscribe(data => { this.cities = data["obj"]; console.log(this.cities); }, error => console.log(error));
    this.httpService.getCountries().subscribe(data => { this.countries = data["obj"]; console.log(this.countries); }, error => console.log(error));

    if (this.id != undefined) {
      this.httpService.GetHotel(this.id.toString()).subscribe(data => {
        this.hotel.hasBeach = data["hasBeach"];
        this.hotel.cityId = data["cityId"];
        this.hotel.countryId = data["countryId"];
        this.hotel.facilities = data["facilities"];
        this.hotel.hotelId = this.id;
        this.hotel.name = data["name"];
        this.hotel.pricePerDay = data["pricePerDay"];
        this.hotel.stars = data["stars"];
      }, error => console.log(error));
    }
  }
  ButtonName(): string
  {
    if (this.id != undefined)
      return "Обновить";
    else
      return "Создать";
  }
}
