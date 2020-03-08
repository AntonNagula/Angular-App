import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainAdminComponent } from './Admin/Main/Main.component';
import { MainClientComponent } from './Client/Main/Main.component';
import { EnterComponent } from './Enter/Enter.component';
import { CreateUserComponent } from './Admin/Main/CreateUser/CreateUser.component';
import { UsersTableComponent } from './Admin/Main/Users/UsersTable.component';


const itemRoutes: Routes = [
  { path: 'CreateUser', component: CreateUserComponent },
  { path: 'UserTable', component: UsersTableComponent },
  { path: 'DeleteUser/:id', component: UsersTableComponent },
  { path: 'UpdateUser/:id', component: CreateUserComponent },
];


const appRoutes: Routes = [
  { path: 'MainAdmin', component: MainAdminComponent },
  { path: 'MainAdmin', component: MainAdminComponent, children: itemRoutes },
  { path: 'MainClient', component: MainClientComponent },
  { path: '', component: EnterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
