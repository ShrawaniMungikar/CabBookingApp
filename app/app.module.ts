import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { CabComponent } from './cab/cab.component';
import { DriverComponent } from './driver/driver.component';
import { HeaderComponent } from './header/header.component';
import { HomepageComponent } from './homepage/homepage.component';
import { TripBookingComponent } from './trip-booking/trip-booking.component';
import { UserComponent } from './user/user.component';
import { AddCabComponent } from './add-cab/add-cab.component';
import { UpdateCabComponent } from './update-cab/update-cab.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AddDriverComponent } from './add-driver/add-driver.component';
import { UpdateDriverComponent } from './update-driver/update-driver.component';
import { SampleComponent } from './sample/sample.component';
import { ViewCabsComponent } from './view-cabs/view-cabs.component';

const allLinks:Routes=[
  {path:'addcab',component:AddCabComponent},
  {path:'searchcab',component:ViewCabsComponent},
  {path:'updatecab',component:UpdateCabComponent},
  {path:'adddriver',component:AddDriverComponent},
  {path:'updatedriver',component:UpdateDriverComponent},
  {path:'viewtripdetails',component:SampleComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    CabComponent,
    DriverComponent,
    HeaderComponent,
    HomepageComponent,
    TripBookingComponent,
    UserComponent,
    AddCabComponent,
    UpdateCabComponent,
    AddDriverComponent,
    UpdateDriverComponent,
    SampleComponent,
    ViewCabsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(allLinks),
    
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
