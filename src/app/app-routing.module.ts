import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainAdminComponent } from './Admin/Main/Main.component';
import { MainClientComponent } from './Client/Main/MainClient.component';
import { EnterComponent } from './Enter/Enter.component';
import { CreateUserComponent } from './Admin/Main/CreateUser/CreateUser.component';
import { UsersTableComponent } from './Admin/Main/Users/UsersTable.component';
import { CreateRoleComponent } from './Admin/Main/CreateRole/CreateRole.component';
import { CreateCountryComponent } from './Client/Main/CreateCountry/CreateCountry.component';
import { WeatherComponent } from './ForAllUsers/Weather/Weather.component';
import { CountriesTableComponent } from './Client/Main/Countries/CountriesTable.component';
import { CreateHotelComponent } from './Client/Main/CreateHotel/CreateHotel.component';
import { HotelsTableComponent } from './Client/Main/Hotels/HotelsTable.component';


const itemRoutes: Routes = [
  { path: 'CreateUser', component: CreateUserComponent },
  { path: 'UserTable', component: UsersTableComponent },
  { path: 'DeleteUser/:id', component: UsersTableComponent },
  { path: 'UpdateUser/:id', component: CreateUserComponent },
  { path: 'CreateRole', component: CreateRoleComponent },
];

const UserRoutes: Routes = [
  { path: 'CreateCountry', component: CreateCountryComponent },
  { path: 'UpdateCountry/:id', component: CreateCountryComponent },
  { path: 'CountriesTable', component: CountriesTableComponent },
  { path: 'DeleteCountry/:id', component: CountriesTableComponent },
  { path: 'CreateHotel', component: CreateHotelComponent },
  { path: 'UpdateHotels/:id', component: CreateHotelComponent },
  { path: 'Hotels', component: HotelsTableComponent },
  { path: 'DeleteHotel/:id', component: HotelsTableComponent }
];

const appRoutes: Routes = [
  { path: 'MainAdmin', component: MainAdminComponent },
  { path: 'MainAdmin', component: MainAdminComponent, children: itemRoutes },
  { path: 'MainClient', component: MainClientComponent },
  { path: 'MainClient', component: MainClientComponent, children: UserRoutes },
  { path: 'Weather', component: WeatherComponent },
  { path: '', component: EnterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
