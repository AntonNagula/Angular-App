import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Proposal, Statuses } from '../../../Models/Proposal';
import { HttpProposalService } from '../../../HttpServices/http.proposals';
import { Subscription } from 'rxjs';
import { HttpPurposeService } from '../../../HttpServices/http.purpose';
import { Purpose } from '../../../Models/Purpose';

@Component({
  selector: 'ReplyQuestions',
  templateUrl: './ReplyQuestions.component.html',
  styleUrls: ['./ReplyQuestions.component.css'],
  providers: [HttpProposalService, HttpPurposeService]
})
export class ReplyQuestionsComponent implements OnInit {
  proposal: Proposal = new Proposal();
  purposes: Purpose[] = [];

  private routeSubscription: Subscription;
  id: string;
  name: string;
  constructor(private httpProposalService: HttpProposalService, private httpPurposeService: HttpPurposeService, private route: ActivatedRoute, private router: Router) {
    this.routeSubscription = route.params.subscribe(params => this.id = params['id']);
  }
  ngOnInit() {
    this.httpProposalService.getProposal(this.id).subscribe((data: Proposal) => {
      this.proposal = data;
    }, error => console.log(error));
    this.httpPurposeService.getPurposes().subscribe((data: Purpose[]) => {
      this.purposes = data;
    }, error => console.log(error));
  }
  Close($event: any): void {
    this.Answers();
    this.MarkDraft();
    this.Send();
    setTimeout(() => this.Route(), 1000);    
  }

  Done($event: any): void {    
    this.Answers();
    this.MarkAsDone();
    this.Send();
    setTimeout(() => this.Route(), 1000);    
  }

  MarkAsDone() {
    this.proposal["statusId"] = Statuses.Sent;
  }

  MarkDraft() {
    this.proposal["statusId"] = Statuses.Draft;
  }

  Send() {
    if (this.proposal.proposalId !== undefined)
      this.httpProposalService.putProposal(this.proposal).subscribe(() => { }, error => console.log(error));
    else
      this.httpProposalService.postProposal(this.proposal).subscribe(() => { }, error => console.log(error));
  }
  Answers() {
    console.log(this.proposal["amount"]);
    this.proposal["amount"] = +this.proposal["amount"];
    this.proposal["purposeId"] = +this.proposal["purposeId"];
    console.log(this.proposal);
  }
  Route() {
    this.router.navigate(
      ['/Client/Proposals']
    );
  }
}
