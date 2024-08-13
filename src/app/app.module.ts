import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import {SearchComponent} from "./search/search.component";
import { AppRoutingModule } from './app-routing.module';
import {TagsComponent} from "./tags/tags.component";
import {FoodPageComponent} from "./food-page/food-page.component";
import {CartPageComponent} from "./cart-page/cart-page.component";
import {NotFoundComponent} from "./not-found/not-found.component"; // Import the AppRoutingModule
// import {RatingModule} from 'ng-starrating';

@NgModule({
  //components
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SearchComponent,
    FoodPageComponent,
    TagsComponent,
    CartPageComponent,
    NotFoundComponent
  ],
  // module
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,

    // RatingModule // Add AppRoutingModule here

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
