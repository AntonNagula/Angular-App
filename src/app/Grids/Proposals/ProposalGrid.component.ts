import { Component, OnInit } from '@angular/core';
import { Proposal, Statuses } from '../../Models/Proposal';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpProposalService } from '../../HttpServices/http.proposals';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ProposalGrid',
  templateUrl: './ProposalGrid.component.html',
  styleUrls: ['./ProposalGrid.component.css'],
  providers: [HttpProposalService]
})
export class ProposalGridComponent implements OnInit {
  proposals: Proposal[] = [];
  enableEdit: boolean = false;
  id: string;
  private routeSubscription: Subscription;

  constructor(private httpProposalService: HttpProposalService, private router: Router, private route: ActivatedRoute) {

  }
  ngOnInit() {
    this.httpProposalService.getProposals().subscribe((data: Proposal[]) => { this.proposals = data; console.log(this.proposals); }, error => console.log(error));
  }
  IsDraft(i: number): boolean {
    return this.proposals[i]["status"] === Statuses.Draft.toString();
  }
  IsSent(i: number): boolean {
    return this.proposals[i]["status"] === Statuses.Sent.toString();
  }
  IsApproved(i: number): boolean {
    return this.proposals[i]["status"] === Statuses.Approved.toString();
  }
  Delete(i: number): void {
    this.httpProposalService.deleteProposal(i.toString()).subscribe(() => { }, error => console.log(error));
    this.router.navigate(
      ['/Proposals']
    );
  }
  Edit(i: number): void {
    this.router.navigate(
      ['/Reply/' + i.toString()]
    );
  }
}
