import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { EnterComponent } from './Enter/Enter.component';
import { MainAdminComponent } from './Admin/Main/Main.component';
import { MainClientComponent } from './Client/Main/MainClient.component';
import { UsersTableComponent } from './Admin/Main/Users/UsersTable.component';
import { CreateUserComponent } from './Admin/Main/CreateUser/CreateUser.component';
import { RegistrationComponent } from './Registration/Registration.component';
import { ProposalGridComponent } from './Grids/Proposals/ProposalGrid.component';
import { StartPageComponent } from './Submitter/Main/StartPage/StartPage.component';
import { MainSubmitterComponent } from './Submitter/Main/MainSubmitter.component';
import { ReplyQuestionsComponent } from './Submitter/Main/Questions/ReplyQuestions.component';
import { ClientProposalGridComponent } from './Grids/ClientProposals/ClientProposalGrid.component';
import { ClientStartPageComponent } from './Client/Main/ClientStartPage/ClientStartPage.component';
import { ProposalViewComponent } from './Client/Main/ProposalView/ProposalView.component';
import { ProposalPaymentsGridComponent } from './Grids/ProposalPayments/ProposalPayments.component';
import { CreatePaymentViewComponent } from './Client/Main/CreatePaymentView/CreatePaymentView.component';

@NgModule({
  declarations: [
    AppComponent,
    EnterComponent,
    MainAdminComponent,
    MainClientComponent,
    UsersTableComponent,
    CreateUserComponent,
    RegistrationComponent,
    ProposalGridComponent,
    StartPageComponent,
    MainSubmitterComponent,
    ReplyQuestionsComponent,
    ClientProposalGridComponent,
    ClientStartPageComponent,
    ProposalViewComponent,
    ProposalPaymentsGridComponent,
    CreatePaymentViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  bootstrap: [AppComponent],
  providers: []
})
export class AppModule { }
