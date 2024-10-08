import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {FoodPageComponent} from "./food-page/food-page.component";
import {CartPageComponent} from "./cart-page/cart-page.component";

const routes: Routes = [
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '', component: HomeComponent },
  {path:'search/:searchTerm', component: HomeComponent}, //search route with parameter
// component is home because we are showing the items in the home component
  {path: 'tags/:tag', component:HomeComponent},
  {path: 'food/:id', component: FoodPageComponent},
  {path: 'cart-page' , component:CartPageComponent}

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
