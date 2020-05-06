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
  warn: string;
  private routeSubscription: Subscription;

  constructor(private httpService: HttpService, private route: ActivatedRoute, private router: Router)
  {    
    this.routeSubscription = route.params.subscribe(params => this.id = params['id']);
  }  
  ngOnInit() {
    if (this.id != undefined) {
      this.httpService.DeleteHotel(this.id).subscribe(() => { this.goToItem() }, error => { this.warn ="Данный " + error["error"]["error"]; console.log(error) });
    }
    this.httpService.getHotels().subscribe((data: Hotel[]) => { this.hotels = data; console.log(this.hotels); }, error => console.log(error));
  }
  HasSea(i: number): string {
    if (this.hotels[i]["hasBeach"])
      return "есть";
    else
      return "нет";
  }
  Name(i: number): string {
    return this.hotels[i]["name"];
  }
  GetId(i: number): string {
    return this.hotels[i]["hotelId"];
  }
  Stars(i: number): string {
    return this.hotels[i]["stars"];
  }
  PricePerDay(i: number): string {
    return this.hotels[i]["pricePerDay"];
  }
  goToItem() {

    this.router.navigate(
      ['/MainClient/Hotels']
    );
  }
}
