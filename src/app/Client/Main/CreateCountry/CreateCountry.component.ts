import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Country } from '../../../Models/Country';
import { HttpService } from '../../../HttpServices/http.service';

@Component({
  selector: 'CreateCountry-app',
  templateUrl: './CreateCountry.component.html',
  styleUrls: ['./CreateCountry.component.css'],
  providers: [HttpService]
})
export class CreateCountryComponent
{  
  newCounty: Country  = new Country();
  id: string;
  isTrue: boolean;
  private routeSubscription: Subscription;

 
  constructor(private httpService: HttpService, private route: ActivatedRoute)
  {
    this.routeSubscription = route.params.subscribe(params => this.id = params['id']);
  }
  submit(newCounty: Country) {
    this.httpService.CreateCountry(newCounty).subscribe(
      () => { }, error => console.log(error));
  }

  onChange(isTrue: boolean) {
    this.newCounty.hasSea = isTrue;
    console.log(this.newCounty);
  }
}
