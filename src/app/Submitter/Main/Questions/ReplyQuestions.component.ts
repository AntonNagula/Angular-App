import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Proposal, Statuses } from '../../../Models/Proposal';
import { HttpProposalService } from '../../../HttpServices/http.proposals';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ReplyQuestions',
  templateUrl: './ReplyQuestions.component.html',
  styleUrls: ['./ReplyQuestions.component.css'],
  providers: [HttpProposalService]
})
export class ReplyQuestionsComponent implements OnInit {
  proposal: Proposal = new Proposal();

  private routeSubscription: Subscription;
  id: string;
  name: string;
  constructor(private httpProposalService: HttpProposalService, private route: ActivatedRoute, private router: Router) {
    this.routeSubscription = route.params.subscribe(params => this.id = params['id']);
  }
  ngOnInit() {
    this.httpProposalService.getProposal(this.id).subscribe((data: Proposal) => {
      this.proposal = data;
    }, error => console.log(error));
  }
  Close($event: any): void {
    this.Answers();
    this.MarkDraft();
    this.Send();
    this.router.navigate(
      ['/Submitter/Proposals']
    );
  }

  Done($event: any): void {
    this.Answers();
    this.MarkAsDone();
    this.Send();
    console.log(this.proposal);
    this.router.navigate(
      ['/Submitter/Proposals']
    );
  }

  MarkAsDone() {
    this.proposal["statusId"] = Statuses.Sent;
  }

  MarkDraft() {
    this.proposal["statusId"] = Statuses.Draft;
  }

  Send() {
    this.httpProposalService.postProposal(this.proposal).subscribe(() => { }, error => console.log(error));
  }
  Answers() {
    this.proposal["amount"] = +this.proposal["amount"];
  }
}
