import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../../../HttpServices/http.service';
import { Country } from '../../../Models/Country';

@Component({
  selector: 'CountriesTable-app',
  templateUrl: './CountriesTable.component.html',
  styleUrls: ['./CountriesTable.component.css'],
  providers: [HttpService]
})
export class CountriesTableComponent implements OnInit
{
  countries: Country[] = [];
  qser: Country;
  id: string;
  private routeSubscription: Subscription;

  constructor(private httpService: HttpService, private route: ActivatedRoute, private router: Router)
  {    
    this.routeSubscription = route.params.subscribe(params => this.id = params['id']);
  }  
  ngOnInit() {
    if (this.id != undefined) {
      this.httpService.DeleteCountry(this.id).subscribe(() => { this.goToItem() }, error => console.log(error));
    }
    this.httpService.getCountries().subscribe(data => { this.countries = data["obj"]; console.log(this.countries); }, error => console.log(error));
  }
  
  goToItem() {
    this.router.navigate(
      ['/MainClient/CountriesTable']
    );
  }
}
