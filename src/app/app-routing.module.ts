import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainAdminComponent } from './Admin/Main/Main.component';
import { MainClientComponent } from './Client/Main/MainClient.component';
import { EnterComponent } from './Enter/Enter.component';
import { CreateUserComponent } from './Admin/Main/CreateUser/CreateUser.component';
import { StartPageComponent } from './Submitter/Main/StartPage/StartPage.component';
import { ReplyQuestionsComponent } from './Submitter/Main/Questions/ReplyQuestions.component';
import { ClientStartPageComponent } from './Client/Main/ClientStartPage/ClientStartPage.component';
import { ProposalViewComponent } from './Client/Main/ProposalView/ProposalView.component';
import { CreatePaymentViewComponent } from './Client/Main/CreatePaymentView/CreatePaymentView.component';
import { BudgetsViewComponent } from './Client/Main/BudgetsView/BudgetsView.component';
import { CreateBTViewComponent } from './Admin/Main/CreateBTView/CreateBTView.component';
import { BTsViewComponent } from './Admin/Main/BTsView/BTsView.component';
import { UsersViewComponent } from './Admin/Main/UsersView/UsersView.component';
import { CreatePurposeComponent } from './Admin/Main/CreatePurpose/CreatePurpose.component';
import { PurposesViewComponent } from './Admin/Main/Purposes/PurposesView.component';


const ClientRoutes: Routes = [
  { path: 'Proposals', component: StartPageComponent },
  { path: 'Proposals/:id', component: StartPageComponent },
  { path: 'Reply', component: ReplyQuestionsComponent },
  { path: 'Reply/:id', component: ReplyQuestionsComponent }
];

const AdminRoutes: Routes = [
  { path: 'CreationBT', component: CreateBTViewComponent },
  { path: 'CreationBT/:id', component: CreateBTViewComponent },
  { path: 'BTs', component: BTsViewComponent },
  { path: 'Users', component: UsersViewComponent },
  { path: 'UpdateUser/:id', component: CreateUserComponent },
  { path: 'CreateUser', component: CreateUserComponent },
  { path: 'Proposals', component: ClientStartPageComponent },
  { path: 'Proposal/:id', component: ProposalViewComponent },
  { path: 'CreationPayment/:id', component: CreatePaymentViewComponent },
  { path: 'Budgets', component: BudgetsViewComponent },
  { path: 'CreatePurpose', component: CreatePurposeComponent },
  { path: 'Purposes', component: PurposesViewComponent }
];

const appRoutes: Routes = [
  { path: 'Client', component: MainClientComponent },
  { path: 'Client', component: MainClientComponent, children: ClientRoutes },
  { path: 'Admin', component: MainAdminComponent },
  { path: 'Admin', component: MainAdminComponent, children: AdminRoutes },
  { path: '', component: EnterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
