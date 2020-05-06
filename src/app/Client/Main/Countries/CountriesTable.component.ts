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
   warn: string;
  private routeSubscription: Subscription;

  constructor(private httpService: HttpService, private route: ActivatedRoute, private router: Router)
  {    
    this.routeSubscription = route.params.subscribe(params => this.id = params['id']);
  }  
  ngOnInit() {
    if (this.id != undefined) {
      this.httpService.DeleteCountry(this.id).subscribe(() => { this.goToItem() }, error => this.warn = error["error"]["error"]);
    }
    this.httpService.getCountries().subscribe((data: Country[]) => { this.countries = data; console.log(data); }, error => console.log(error));
  }
  HasSea(i: number): string {
    if (this.countries[i]["hasSea"])
      return "есть выход к морю";
    else
      return "нет выхода к морю";
  }
  Name(i: number): string {
    return this.countries[i]["name"];
  }
  GetId(i: number): string {
    return this.countries[i]["countryId"];
  }
  goToItem() {
    this.router.navigate(
      ['/MainClient/CountriesTable']
    );
  }
}
