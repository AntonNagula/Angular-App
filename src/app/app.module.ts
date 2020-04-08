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
import { WeatherComponent } from './ForAllUsers/Main/Weather/Weather.component';
import { CountriesTableComponent } from './Client/Main/Countries/CountriesTable.component';
import { HotelsTableComponent } from './Client/Main/Hotels/HotelsTable.component';
import { CreateHotelComponent } from './Client/Main/CreateHotel/CreateHotel.component';
import { ToursTableComponent } from './Client/Main/Tours/ToursTable.component';
import { MainForAllUsersComponent } from './ForAllUsers/Main/MainForAllUsers.component';
import { ChoiseTourComponent } from './ForAllUsers/Main/Tours/ChoiseTour.component';

@NgModule({
  declarations: [
    AppComponent,
    EnterComponent,
    MainAdminComponent,
    MainClientComponent,
    UsersTableComponent,
    CreateUserComponent,
    CreateRoleComponent,
    CreateCountryComponent,
    CountriesTableComponent,
    CreateHotelComponent,
    HotelsTableComponent,
    ToursTableComponent,
    WeatherComponent,
    MainForAllUsersComponent,
    ChoiseTourComponent
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
