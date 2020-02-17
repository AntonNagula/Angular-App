import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainAdminComponent } from './Admin/Main/Main.component';
import { MainClientComponent } from './Client/Main/Main.component';
import { EnterComponent } from './Enter/Enter.component';

const appRoutes: Routes = [
  { path: 'MainAdmin', component: MainAdminComponent },
  { path: 'MainClient', component: MainClientComponent },
  { path: '', component: EnterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
