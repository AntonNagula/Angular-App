import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Country } from '../../../Models/Country';
import { HttpService } from '../../../HttpServices/http.service';

@Component({
  selector: 'CreateCountry-app',
  templateUrl: './CreateCountry.component.html',
  styleUrls: ['./CreateCountry.component.css'],
  providers: [HttpService]
})
export class CreateCountryComponent implements OnInit
{  
  newCounty: Country = new Country();
  id: string;
  isTrue: boolean;
  private routeSubscription: Subscription;

 
  constructor(private httpService: HttpService, private route: ActivatedRoute, private router: Router)
  {
    this.routeSubscription = route.params.subscribe(params => this.id = params['id']);
  }
  submit(newCounty: Country) {
    if (this.id != undefined) {
      newCounty.countryId = this.id;
      console.log(newCounty);
      this.httpService.UpdateCountry(newCounty).subscribe(
        (data: string) => { console.log(data) }, error => console.log(error));
    }
    else {
      this.httpService.CreateCountry(newCounty).subscribe(
        () => { }, error => console.log(error));
    }

    this.router.navigate(
      ['/MainClient/CountriesTable']
    );
  }

  ngOnInit() {
    if (this.id != undefined) {
      this.httpService.GetCountry(this.id.toString()).subscribe(data =>
      {
        this.newCounty.hasSea = data["hasSea"];
        this.newCounty.img = data["img"];
        this.newCounty.name = data["name"];
        this.newCounty.countryId = this.id;
      }, error => console.log(error));
    }
  }

  onChange(isTrue: boolean) {
    this.newCounty.hasSea = isTrue;
    console.log(this.newCounty);
  }
}
