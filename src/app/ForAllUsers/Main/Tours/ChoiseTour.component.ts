import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../../../HttpServices/http.service';
import { Tour } from '../../../Models/Tour';
import { Country } from '../../../Models/Country';

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
  img: string;
  id: string;
  private routeSubscription: Subscription;

  constructor(private httpService: HttpService, private route: ActivatedRoute, private router: Router)
  {    
    //this.routeSubscription = route.params.subscribe(params => this.id = params['id']);
  }  
  ngOnInit() {
    this.httpService.getTours().subscribe(data => { this.tours = data["obj"]; console.log(this.tours); }, error => console.log(error));
    this.httpService.getCountries().subscribe(data => { this.contries = data["obj"]; console.log(this.contries); }, error => console.log(error));
  }
  Img(id: number): string {
    return this.contries[id]["name"];
  }
}
