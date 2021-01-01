import { Component, OnInit } from '@angular/core';
import { Proposal, Statuses } from '../../Models/Proposal';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpProposalService } from '../../HttpServices/http.proposals';
import { Subscription } from 'rxjs';
import { HttpPurposeService } from '../../HttpServices/http.purpose';
import { Purpose } from '../../Models/Purpose';

@Component({
  selector: 'PurposesGrid',
  templateUrl: './PurposesGrid.component.html',
  styleUrls: ['./PurposesGrid.component.css'],
  providers: [HttpPurposeService]
})
export class PurposesGridComponent implements OnInit {
  purposes: Purpose[] = [];
  private routeSubscription: Subscription;

  constructor(private httpPurposeService: HttpPurposeService, private router: Router, private route: ActivatedRoute) {

  }
  ngOnInit() {
    this.httpPurposeService.getPurposes().subscribe((data: Purpose[]) => { this.purposes = data; console.log(this.purposes); }, error => console.log(error));
  }
  Delete(i: number): void {
    this.purposes[i].enabled = false;
    this.httpPurposeService.putPurpose(this.purposes[i]).subscribe(() => { }, error => console.log(error));
    setTimeout(() => this.Reload(), 1000);
  }
  Reload() {
    window.location.reload();
  }
}
