import {Component, OnInit} from '@angular/core';
import {Food} from "../shared/models/Food";
import {ActivatedRoute, Router} from "@angular/router";
import {FoodService} from "../services/food/food.service";
import {CartService} from "../services/carts/cart.service";

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrl: './food-page.component.css'
})
export class FoodPageComponent implements OnInit{
  food!:Food;
  constructor(private activatedRoute: ActivatedRoute,
              private foodService: FoodService,
              private cartService:CartService,
              private router:Router) {

    //whenever params, change will know
    activatedRoute.params.subscribe(params=>{
      if(params['id']){
        this.food=foodService.getFoodById(params['id'])
      }
    })

  }
  ngOnInit():void{

  }

  addToCart(){
    this.cartService.addToCart(this.food);
    this.router.navigateByUrl('/cart-page');
  }

}
