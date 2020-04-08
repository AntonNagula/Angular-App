import { Component, OnInit, Input } from '@angular/core';
import { WeatherService } from '../../../HttpServices/Weather.Service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'Weather-root',
  templateUrl: './Weather.component.html',
  styleUrls: ['./Weather.component.css'],
  providers: [WeatherService]
})
export class WeatherComponent implements OnInit {
  _city: string;
  private routeSubscription: Subscription;
  date = new Date();
  weather: any;
  mas: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39];
  constructor(private httpService: WeatherService, private router: ActivatedRoute,private navigater: Router)
  {
    this.routeSubscription = router.params.subscribe(params => this._city = params['City']);
  }
  ngOnInit() {
    this.httpService.getWeather5_8(this._city).subscribe(data => { this.weather = data["list"]; console.log(data); }, error => console.log(error));
  }
  getDate(timy: number) {
    return 10;
  }
}
