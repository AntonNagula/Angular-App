import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../../../HttpServices/http.service';
import { Hotel } from '../../../Models/Hotel';

@Component({
  selector: 'HotelsTable-app',
  templateUrl: './HotelsTable.component.html',
  styleUrls: ['./HotelsTable.component.css'],
  providers: [HttpService]
})
export class HotelsTableComponent implements OnInit
{
  hotels: Hotel[] = [];
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
    this.httpService.getHotels().subscribe(data => { this.hotels = data["obj"]; console.log(this.hotels); }, error => console.log(error));
  }
  
  goToItem() {

    this.router.navigate(
      ['/MainClient/Hotels']
    );
  }
}
