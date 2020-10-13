import { Component, OnInit } from '@angular/core';
import { Proposal } from '../../Models/Proposal';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpProposalService } from '../../HttpServices/http.proposals';

@Component({
  selector: 'ProposalGrid',
  templateUrl: './ProposalGrid.component.html',
  styleUrls: ['./ProposalGrid.component.css'],
  providers: [HttpProposalService]
})
export class ProposalGridComponent implements OnInit {
  proposals: Proposal[] = [];

  constructor(private httpProposalService: HttpProposalService, private route: ActivatedRoute, private router: Router) {

  }
  ngOnInit() {
    this.httpProposalService.getProposals().subscribe((data: Proposal[]) => { this.proposals = data; console.log(this.proposals); }, error => console.log(error));
  }
}
