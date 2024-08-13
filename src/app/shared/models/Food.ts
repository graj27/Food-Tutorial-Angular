import { NumberValueAccessor } from "@angular/forms";

//export makes the class accessible outside the food.ts file
export class Food{
    id!: number; 
    //id?: number;  optional
    //id: number = 0;  setting default value
    // id is mandatory
    // constructor(id:number){
    //     this.id=id;
    // }

    name!: string; //mandatory
    price!:number;
    tags?:string[]; //optional
    favorite:boolean=false;
    stars:number=0;
    imageUrl!:string;
    origins!:string[];
    cookTime!:string;
}