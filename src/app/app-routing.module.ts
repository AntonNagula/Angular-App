import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainAdminComponent } from './Admin/Main/Main.component';
import { MainClientComponent } from './Client/Main/MainClient.component';
import { EnterComponent } from './Enter/Enter.component';
import { CreateUserComponent } from './Admin/Main/CreateUser/CreateUser.component';
import { UsersTableComponent } from './Admin/Main/Users/UsersTable.component';
import { CreateCountryComponent } from './Client/Main/CreateCountry/CreateCountry.component';
import { WeatherComponent } from './ForAllUsers/Main/Weather/Weather.component';
import { CountriesTableComponent } from './Client/Main/Countries/CountriesTable.component';
import { CreateHotelComponent } from './Client/Main/CreateHotel/CreateHotel.component';
import { HotelsTableComponent } from './Client/Main/Hotels/HotelsTable.component';
import { ToursTableComponent } from './Client/Main/Tours/ToursTable.component';
import { MainForAllUsersComponent } from './ForAllUsers/Main/MainForAllUsers.component';
import { ChoiseTourComponent } from './ForAllUsers/Main/Tours/ChoiseTour.component';
import { ThisTourComponent } from './ForAllUsers/Main/ThisTour/ThisTour.component';
import { CreateVoucherComponent } from './ForAllUsers/Main/CreateVoucher/CreateVoucher.component';
import { RegistrationComponent } from './Registration/Registration.component';
import { ProposalGridComponent } from './Grids/Proposals/ProposalGrid.component';
import { StartPageComponent } from './Submitter/Main/StartPage/StartPage.component';
import { MainSubmitterComponent } from './Submitter/Main/MainSubmitter.component';



const SubmitterRoutes: Routes = [
  { path: 'Proposals', component: StartPageComponent }
];

const otherRoutes: Routes = [
  { path: 'Weather/:City', component: WeatherComponent },
  { path: 'Tours', component: ChoiseTourComponent },
  { path: 'ThisTour/:id', component: ThisTourComponent },
  { path: 'CreateVoucher/:id', component: CreateVoucherComponent },
  { path: 'Registration', component: RegistrationComponent }
];

const itemRoutes: Routes = [
  { path: 'CreateUser', component: CreateUserComponent },
  { path: 'UserTable', component: UsersTableComponent },
  { path: 'DeleteUser/:id', component: UsersTableComponent },
  { path: 'UpdateUser/:id', component: CreateUserComponent }
];

const UserRoutes: Routes = [
  { path: 'CreateCountry', component: CreateCountryComponent },
  { path: 'UpdateCountry/:id', component: CreateCountryComponent },
  { path: 'CountriesTable', component: CountriesTableComponent },
  { path: 'DeleteCountry/:id', component: CountriesTableComponent },
  { path: 'CreateHotel', component: CreateHotelComponent },
  { path: 'UpdateHotels/:id', component: CreateHotelComponent },
  { path: 'Hotels', component: HotelsTableComponent },
  { path: 'DeleteHotel/:id', component: HotelsTableComponent },
  { path: 'CreateTour', component: CreateHotelComponent },
  { path: 'UpdateTours/:id', component: CreateHotelComponent },
  { path: 'Tours', component: ToursTableComponent },
  { path: 'DeleteTour/:id', component: ToursTableComponent },
];

const appRoutes: Routes = [
  { path: 'MainForAllUsers', component: MainForAllUsersComponent },
  { path: 'MainForAllUsers', component: MainForAllUsersComponent, children: otherRoutes },
  { path: 'MainAdmin', component: MainAdminComponent },
  { path: 'MainAdmin', component: MainAdminComponent, children: itemRoutes },
  { path: 'MainClient', component: MainClientComponent },
  { path: 'MainClient', component: MainClientComponent, children: UserRoutes },
  { path: '', component: StartPageComponent }
  //{ path: '', component: MainSubmitterComponent },
  //{ path: '', component: MainSubmitterComponent, children: SubmitterRoutes }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
