import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../../../HttpServices/http.service';
import { Tour } from '../../../Models/Tour';

@Component({
  selector: 'ToursTable-app',
  templateUrl: './ToursTable.component.html',
  styleUrls: ['./ToursTable.component.css'],
  providers: [HttpService]
})
export class ToursTableComponent implements OnInit
{
  tours: Tour[] = [];
  id: string;
  private routeSubscription: Subscription;

  constructor(private httpService: HttpService, private route: ActivatedRoute, private router: Router)
  {    
    //this.routeSubscription = route.params.subscribe(params => this.id = params['id']);
  }  
  ngOnInit() {
    //if (this.id != undefined) {
    //  this.httpService.DeleteCountry(this.id).subscribe(() => { this.goToItem() }, error => console.log(error));
    //}
    this.httpService.getHotels().subscribe(data => { this.tours = data["obj"]; console.log(this.tours); }, error => console.log(error));
  }
  
  goToItem() {

    this.router.navigate(
      ['/MainClient/Tours']
    );
  }
}
