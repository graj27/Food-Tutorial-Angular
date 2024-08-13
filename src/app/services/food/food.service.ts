import { Injectable } from '@angular/core';
import { Food } from '../../shared/models/Food';
import {Tag} from "../../shared/models/Tag";
@Injectable({
  providedIn: 'root'
})

export class FoodService {
  foods:Food[]=[];
  constructor() { }

  // getAll(): string[] {
  //   return [
  //     '/assets/images/food-img-1.jpg',
  //     '/assets/images/food-img-2.jpg',
  //     '/assets/images/food-img-3.jpg',
  //     '/assets/images/food-img-4.jpg',
  //     '/assets/images/food-img-5.jpg',
  //   ]
  // }

  getAll():Food[]{
    return [{
      id: 1,
      name: 'Pizza Pepperoni',
      cookTime: '10-20',
      price: 10,
      favorite: false,
      origins: ['italy'],
      stars: 4.5,
      imageUrl: '/assets/images/food-img-1.jpg',
      tags: ['FastFood', 'Pizza', 'Lunch'],
      },
      {
      id: 2,
      name: 'Meatball',
      price: 20,
      cookTime: '20-30',
      favorite: true,
      origins: ['persia', 'middle east', 'china'],
      stars: 4.7,
      imageUrl: '/assets/images/food-img-2.jpg',
      tags: ['SlowFood', 'Lunch'],
      },
      {
      id: 3,
      name: 'Hamburger',
      price: 5,
      cookTime: '10-15',
      favorite: false,
      origins: ['germany', 'us'],
      stars: 3.5,
      imageUrl: '/assets/images/food-img-3.jpg',
      tags: ['FastFood', 'Hamburger'],
      },
      {
      id: 4,
      name: 'Fried Potatoes',
      price: 2,
      cookTime: '15-20',
      favorite: true,
      origins: ['belgium', 'france'],
      stars: 3.3,
      imageUrl: '/assets/images/food-img-4.jpg',
      tags: ['FastFood', 'Fry'],
      },
      {
      id: 5,
      name: 'Chicken Soup',
      price: 11,
      cookTime: '40-50',
      favorite: false,
      origins: ['india', 'asia'],
      stars: 3.0,
      imageUrl: '/assets/images/food-img-5.jpg',
      tags: ['SlowFood', 'Soup'],
      },
      {
      id: 6,
      name: 'Vegetables Pizza',
      price: 9,
      cookTime: '40-50',
      favorite: false,
      origins: ['italy'],
      stars: 4.0,
      imageUrl: '/assets/images/food-img-6.jpg',
      tags: ['FastFood', 'Pizza', 'Lunch'],
      },]
  }

  getAllFoodsByTag(tag: string): Food[]{

    // if(tag=='All'){
    //   return this.getAll();
    // }
    // else{
    //   return this.getAll().filter(food=>
    //     food.tags?.includes(tag));
    // }

    return tag=='All' ?
      this.getAll(): //true
      this.getAll().filter(food=>food.tags?.includes(tag)); //false
  }

  getAllTags():Tag[]{
   return[
     { tagName: 'All', count: 14 },
    { tagName: 'FastFood', count: 4 },
    { tagName: 'Pizza', count: 2 },
    { tagName: 'Lunch', count : 3 },
    { tagName: 'SlowFood', count: 2 },
    { tagName: 'Hamburger', count: 1 },
    { tagName: 'Fry', count: 1 },
    { tagName: 'Soup', count: 1 }];
  }

  getAllFoodsBySearchTerm(searchTerm: string): Food[]{
    return this.getAll().filter(food=>food.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }

  getFoodById(id:number):Food{
    return this.getAll().find(food=>food.id ==id)!;
  }
}
