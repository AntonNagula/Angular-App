import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../HttpServices/Weather.Service';

@Component({
  selector: 'Weather-root',
  templateUrl: './Weather.component.html',
  styleUrls: ['./Weather.component.css'],
  providers: [WeatherService]
})
export class WeatherComponent implements OnInit {
  weather: any;
  mas: number[]=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29];
  constructor(private httpService: WeatherService) {  }
  ngOnInit() {
    
    this.httpService.getWeather30().subscribe(data => { this.weather = data; console.log(data); }, error => console.log(error));
    //this.httpService.getWeather5_8().subscribe(data => { console.log(data["list"][38]); }, error => console.log(error));
  }
}
