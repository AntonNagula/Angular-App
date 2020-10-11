import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../../../HttpServices/http.service';
import { Tour } from '../../../Models/Tour';
import { Country } from '../../../Models/Country';
import { ChoisenCriterials } from '../../../Models/ChoisenCriterials';

@Component({
  selector: 'ChoiseTour-app',
  templateUrl: './ChoiseTour.component.html',
  styleUrls: ['./ChoiseTour.component.css'],
  providers: [HttpService]
})
export class ChoiseTourComponent implements OnInit
{
  tours: Tour[] = [];
  contries: Country[] = [];
  choisenCriterials: ChoisenCriterials = new ChoisenCriterials();
  Contry: string;
  id: string;
  private routeSubscription: Subscription;

  constructor(private httpService: HttpService, private route: ActivatedRoute, private router: Router)
  {    
    
  }  
  ngOnInit() {
    this.httpService.getTours().subscribe((data : Tour[]) => { this.tours = data; console.log(this.tours); }, error => console.log(error));
    this.httpService.getCountries().subscribe((data: Country[]) => { this.contries = data; console.log(this.contries); }, error => console.log(error));
  }
  ContryName(id: number): string {
    return this.contries[id]["name"];
  }
  TourContryname(id: number): string {
    return this.tours[id]["country"];
  }
  TourId(id: number): string {
    return this.tours[id]["tourId"];
  }
  TourCityname(id: number): string {
    return this.tours[id]["city"];
  }
  TourContryImgName(id: number): string {
    return "assets/страны/" + this.tours[id]["country"] + ".jpg";
  }
  Submit(choisenCriterials : ChoisenCriterials)
  {
    this.router.navigate(
      ['/MainForAllUsers/AllTours'],
      {
        queryParams: {
          'countryId': choisenCriterials.countryId,
          'startDate': choisenCriterials.startDate,
          'endDate': choisenCriterials.endDate
        }
      }
    );
  }
}
