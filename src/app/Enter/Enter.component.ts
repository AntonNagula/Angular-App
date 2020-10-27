import { Component } from '@angular/core';
import { EnterData } from './../Models/EnterData';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../Services/AuthService';
import { Proposal } from '../Models/Proposal';

@Component({
  selector: 'Enter',
  templateUrl: './Enter.component.html',
  styleUrls: ['./Enter.component.css'],
  providers: [AuthService]
})
export class EnterComponent {
  role: string;
  login: string;
  password: string;
  user: EnterData = new EnterData(); 
  warn: string;
  receivedUser: EnterData; 
  done: boolean = false;
  constructor(private authService: AuthService, private route: ActivatedRoute, private router: Router) { }

  submit($event: any) {
    this.authService.Token(this.login, this.password);

    setTimeout(() => this.Route(), 1000);
  }

  Route() {
    this.role = localStorage.getItem("role");
    console.log(this.role);
    if (this.role == "Admin") {
      this.router.navigate(['/Admin/Users']);
    }
    else if (this.role == "Client") {
      this.router.navigate(['/Client/Proposals']);
    }
    else if (this.role == "Submitter") {
      this.router.navigate(['/Submitter/Proposals']);
    }
    else {
      this.warn = "неправильно введен логин или пароль";
    }
  }
}
