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
import { CreateRoleComponent } from './Admin/Main/CreateRole/CreateRole.component';
import { CreateCountryComponent } from './Client/Main/CreateCountry/CreateCountry.component';

@NgModule({
  declarations: [
    AppComponent,
    EnterComponent,
    MainAdminComponent,
    MainClientComponent,
    UsersTableComponent,
    CreateUserComponent,
    CreateRoleComponent,
    CreateCountryComponent
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
