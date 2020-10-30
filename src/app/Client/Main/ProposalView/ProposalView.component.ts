import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpProposalService } from '../../../HttpServices/http.proposals';
import { Subscription } from 'rxjs';
import { Proposal } from '../../../Models/Proposal';

@Component({
  selector: 'ProposalView',
  templateUrl: './ProposalView.component.html',
  styleUrls: ['./ProposalView.component.css'],
  providers: [HttpProposalService]
})
export class ProposalViewComponent implements OnInit {
  private routeSubscription: Subscription;
  proposal: Proposal = new Proposal();
  private id: string;  

  constructor(private router: Router, private route: ActivatedRoute, private httpProposalService: HttpProposalService,) {
    this.routeSubscription = route.params.subscribe(params => this.id = params['id']);
  }

  ngOnInit() {
    this.httpProposalService.getProposal(this.id.toString()).subscribe((data: Proposal) => { this.proposal = data; console.log(this.proposal); }, error => console.log(error));
  }

  NameSurname(): string {
    return this.proposal["user"]["name"] + " " + this.proposal["user"]["surname"];
  }

  ToPayment($event: any): void {
    this.router.navigate(
      ['/Client/CreationPayment/' + this.id]
    );
  }
}
