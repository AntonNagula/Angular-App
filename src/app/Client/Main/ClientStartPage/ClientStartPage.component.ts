import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpProposalService } from '../../../HttpServices/http.proposals';

@Component({
  selector: 'ClientStartPage',
  templateUrl: './ClientStartPage.component.html',
  styleUrls: ['./ClientStartPage.component.css'],
  providers: [HttpProposalService]
})
export class ClientStartPageComponent {
  constructor(private router: Router, private httpProposalService: HttpProposalService,) {
   
  }
}
