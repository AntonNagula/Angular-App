import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpProposalService } from '../../../HttpServices/http.proposals';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ClientStartPage',
  templateUrl: './ClientStartPage.component.html',
  styleUrls: ['./ClientStartPage.component.css'],
  providers: [HttpProposalService]
})
export class ClientStartPageComponent {
  constructor(private router: Router, private httpProposalService: HttpProposalService,) {
   
  }

  ToForm($event: any): void {
    this.router.navigate(
      ['/Reply']
    );
  }
}
