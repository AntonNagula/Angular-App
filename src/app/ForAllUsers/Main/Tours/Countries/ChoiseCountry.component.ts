import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../../../../HttpServices/http.service';
import { Country } from '../../../../Models/Country';

@Component({
  selector: 'ChoiseCountry-app',
  templateUrl: './ChoiseCountry.component.html',
  styleUrls: ['./ChoiseCountry.component.css'],
  providers: [HttpService]
})
export class ChoiseCountryComponent implements OnInit
{
  contries: Country[] = [];
  id: string;
  private routeSubscription: Subscription;

  constructor(private httpService: HttpService, private route: ActivatedRoute, private router: Router)
  {    
    
  }  
  ngOnInit() {
    this.httpService.getCountries().subscribe((data: Country[]) => { this.contries = data; console.log(this.contries); }, error => console.log(error));
  }
  ContryId(id: number): string {
    return this.contries[id]["countryId"];
  }
  ContryName(id: number): string {
    return this.contries[id]["name"];
  }
}
