import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../../../HttpServices/http.service';
import { Tour } from '../../../Models/Tour';
import { Country } from '../../../Models/Country';
import { ChoisenCriterials } from '../../../Models/ChoisenCriterials';

@Component({
  selector: 'AllTour-app',
  templateUrl: './AllTour.component.html',
  styleUrls: ['./AllTour.component.css'],
  providers: [HttpService]
})
export class AllTourComponent implements OnInit
{
  tours: Tour[] = [];
  contries: Country[] = [];
  choisenCriterials : ChoisenCriterials = new ChoisenCriterials();
  Contry: string;
  id: string;
  private routeSubscription: Subscription;
  private querySubscription: Subscription;
  constructor(private httpService: HttpService, private route: ActivatedRoute, private router: Router)
  {    
    this.routeSubscription = route.params.subscribe(params => this.id = params['id']);
    this.querySubscription = route.queryParams.subscribe(
      (queryParam: any) => {
        this.choisenCriterials.endDate = queryParam['endDate'];
        this.choisenCriterials.startDate = queryParam['startDate'];
        this.choisenCriterials.countryId = queryParam['countryId'];
      }
    );
    console.log(this.choisenCriterials);
  }  
  ngOnInit() {
    if (this.id != undefined)
    {
      this.httpService.getTourByCountry(this.id).subscribe((data : Tour[]) => { this.tours = data; console.log(this.tours); }, error => console.log(error));
    }
    else if (this.choisenCriterials.countryId != undefined && this.choisenCriterials.countryId != undefined && this.choisenCriterials.countryId != undefined)
    {
      this.httpService.getTourByCriterials(this.choisenCriterials).subscribe((data: Tour[]) => { this.tours = data; console.log(this.tours); }, error => console.log(error));
    }
    else
    {
      this.httpService.getTours().subscribe((data : Tour[]) => { this.tours = data; console.log(this.tours); }, error => console.log(error));
    }
    this.httpService.getCountries().subscribe((data: Country[]) => { this.contries = data; console.log(this.tours); }, error => console.log(error));
  }
  TourContryname(id: number): string {
    return "assets/страны/"+this.tours[id]["country"]+".jpg";
  }
  TourCityname(id: number): string {
    return this.tours[id]["city"];
  }
  TourId(id: number): string {
    return this.tours[id]["tourId"];
  }
  TourNights(id: number): string {
    console.log(this.tours[id]["numberOfNights"]);
    return this.tours[id]["numberOfNights"];
  }
  TourPrice(id: number): string {
    console.log(this.tours[id]["price"]);
    return this.tours[id]["price"];
  }
  Submit(choisenCriterials: ChoisenCriterials) {
    this.httpService.getTourByCriterials(this.choisenCriterials).subscribe((data: Tour[]) => { this.tours = data; console.log(this.tours); }, error => console.log(error));
  }
}
