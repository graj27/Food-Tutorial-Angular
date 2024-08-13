import { Component, OnInit } from '@angular/core';
import {FoodService} from '../services/food/food.service';
import { Food } from '../shared/models/Food';
import {ActivatedRoute} from "@angular/router";  //imports to listen for route changes
import {SearchComponent} from "../search/search.component";
import {TagsComponent} from "../tags/tags.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    foods:Food[]=[];

  constructor(private foodService: FoodService, private activatedRoute: ActivatedRoute ){}
  //injecting service food and activated routes to be able to use service and route

  ngOnInit(): void{
    this.foods=this.foodService.getAll();
    console.log(this.foods);
    console.log(this.activatedRoute);

    this.activatedRoute.params.subscribe(
      params =>{
        if (params['searchTerm']) {
          // this.foods = this.foodService.getAll().filter(food =>
          //   food.name.toLowerCase().includes(params['searchTerm'].toLowerCase()));

          this.foods=this.foodService.getAllFoodsBySearchTerm(params['searchTerm']);
        }

        else if(params['tag']){
          this.foods=this.foodService.getAllFoodsByTag(params['tag']);
        }
        else{
          this.foods=this.foodService.getAll();
        }
        }
      )
    // whenever the params change, notify this function inside subscrive func
    // this.activatedRoute.params.subscribe(params=>{
    // //   if param has search term /not undefined
    //   this.foods
    // })
  }
}
