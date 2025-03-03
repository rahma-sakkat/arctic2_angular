import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResidenceComponent } from './residence/residence.component';
import { ResidencedetailsComponent } from './residencedetails/residencedetails.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ResidenceformComponent } from './residenceform/residenceform.component';
import { AddappformComponent } from './addappform/addappform.component';

const routes: Routes = [
  
  {path:'',redirectTo: 'home', pathMatch:"full"},
  {path:"residences" , component:ResidenceComponent},
 
  {path:"home", component:HomeComponent},
  {path:"addapp", component:AddappformComponent},
  {path:"addresidence", component:ResidenceformComponent},

  {path:"residences/details/:id", component:ResidencedetailsComponent},
 //{path:"**", component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
