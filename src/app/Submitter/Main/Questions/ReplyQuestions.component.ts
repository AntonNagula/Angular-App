import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Question } from '../../../Models/Question';
import { Answer } from '../../../Models/Answer';
import { HttpQuestionService } from '../../../HttpServices/http.questions';
import { HttpAnswerService } from '../../../HttpServices/http.answers';
import { Proposal, Statuses } from '../../../Models/Proposal';
import { HttpProposalService } from '../../../HttpServices/http.proposals';

@Component({
  selector: 'ReplyQuestions',
  templateUrl: './ReplyQuestions.component.html',
  styleUrls: ['./ReplyQuestions.component.css'],
  providers: [HttpProposalService]
})
export class ReplyQuestionsComponent {
  questions: Question[] = [];
  proposal: Proposal = new Proposal();
  userName: string;
  userSurname: string;
  purpose: string;
  amount: string;
  bankAccount: string;
  constructor(private httpProposalService: HttpProposalService, private route: ActivatedRoute, private router: Router) {
    
  }
  Close($event: any): void {
    this.Answers();
    this.MarkDraft();
    this.Send();
    this.router.navigate(
      ['/Proposals']
    );
  }

  Done($event: any): void {
    this.Answers();
    this.MarkAsDone();
    this.Send();
    this.router.navigate(
      ['/Proposals']
    );
  }

  Answers() {
    this.proposal["userName"] = this.userName;
    this.proposal["userSurname"] = this.userSurname;
    this.proposal["purpose"] = this.purpose;
    this.proposal["amount"] = this.amount;
    this.proposal["bankAccount"] = this.bankAccount;
  }

  MarkAsDone() {
    this.proposal["status"] = Statuses.Sent.toString();
  }

  MarkDraft() {
    this.proposal["status"] = Statuses.Draft.toString();
  }

  Send() {
    this.httpProposalService.postProposal(this.proposal).subscribe(() => { }, error => console.log(error));
  }
}
