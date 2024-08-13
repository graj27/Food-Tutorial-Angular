import {Component, Input, OnInit} from '@angular/core';
import {Tag} from "../shared/models/Tag";
import {RouterLink} from "@angular/router";
import {FoodService} from "../services/food/food.service";

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrl: './tags.component.css'
})
export class TagsComponent implements OnInit{
  tags?: Tag[];

  @Input()
  foodPageTags?:string[]; //nullable
  @Input()
  justifyContent: string='center';
  constructor(private foodService: FoodService) { }

  ngOnInit() {
    if(!this.foodPageTags)
    this.tags=this.foodService.getAllTags();
  }

}
