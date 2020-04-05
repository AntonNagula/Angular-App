import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../../HttpServices/Weather.Service';
import { HttpService } from '../../../HttpServices/http.service';
import { ActivatedRoute, Router } from '@angular/router';
import { City } from '../../../Models/City';
import { Subscription } from 'rxjs';

@Component({
  selector: 'WeatherCity-root',
  templateUrl: './WeatherCity.component.html',
  styleUrls: ['./WeatherCity.component.css'],
  providers: [WeatherService]
})
export class WeatherCityComponent implements OnInit {
  City: string = "Minsk";
  cities: City[] = [];
  private routeSubscription: Subscription;
  constructor(private httpService: HttpService, private route: ActivatedRoute, private router: Router)
  {
    this.routeSubscription = route.params.subscribe();
  }

  submit(city: string) {
    
  }

  ngOnInit() {
    this.httpService.getCities().subscribe(data => { this.cities = data["obj"]; }, error => console.log(error));
  }
  goToItem() {

    this.router.navigate(
      ['/MainForAllUsers/UserTable']
    );
  }
}
