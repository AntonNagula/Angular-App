import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpProposalService } from '../../HttpServices/http.proposals';

@Component({
  selector: 'MainSubmitter',
  templateUrl: './MainSubmitter.component.html',
  styleUrls: ['./MainSubmitter.component.css'],
  providers: [HttpProposalService]
})
export class MainSubmitterComponent {

  constructor(private route: ActivatedRoute, private router: Router) {

  }
}
