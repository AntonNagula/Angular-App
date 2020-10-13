import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpProposalService } from '../../../HttpServices/http.proposals';

@Component({
  selector: 'StartPage',
  templateUrl: './StartPage.component.html',
  styleUrls: ['./StartPage.component.css'],
  providers: [HttpProposalService]
})
export class StartPageComponent {

  constructor(private route: ActivatedRoute, private router: Router) {

  }
}
