import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpProposalService } from '../../../HttpServices/http.proposals';
import { Subscription } from 'rxjs';

@Component({
  selector: 'StartPage',
  templateUrl: './StartPage.component.html',
  styleUrls: ['./StartPage.component.css'],
  providers: [HttpProposalService]
})
export class StartPageComponent {
  constructor(private router: Router, private httpProposalService: HttpProposalService,) {
   
  }

  ToForm($event: any): void {
    this.router.navigate(
      ['/Client/Reply']
    );
  }
  ToGrid($event: any): void {
    window.location.reload();
  }
}
