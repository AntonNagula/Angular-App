import { Component, OnInit } from '@angular/core';
import { Proposal, Statuses } from '../../Models/Proposal';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpProposalService } from '../../HttpServices/http.proposals';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ClientProposalGrid',
  templateUrl: './ClientProposalGrid.component.html',
  styleUrls: ['./ClientProposalGrid.component.css'],
  providers: [HttpProposalService]
})
export class ClientProposalGridComponent implements OnInit {
  proposals: Proposal[] = [];
  private routeSubscription: Subscription;

  constructor(private httpProposalService: HttpProposalService, private router: Router, private route: ActivatedRoute) {

  }
  ngOnInit() {
    this.httpProposalService.getProposals().subscribe((data: Proposal[]) => { this.proposals = data; console.log(this.proposals); }, error => console.log(error));
  }
  IsDraft(i: number): boolean {
    return this.proposals[i]["status"] === Statuses.Draft;
  }
  IsSent(i: number): boolean {
    return this.proposals[i]["status"] === Statuses.Sent;
  }
  IsApproved(i: number): boolean {
    return this.proposals[i]["status"] === Statuses.Approved;
  }
  NameSurname(i: number): string {
    return this.proposals[i]["user"]["name"] + " " + this.proposals[i]["user"]["surname"];
  }
  Show(i: number): void {
    this.router.navigate(
      ['/Admin/Proposal/' + i.toString()]
    );
  }
}
