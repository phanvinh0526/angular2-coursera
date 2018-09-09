
import { Injectable } from '@angular/core';
import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';


@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor() { }

  getDishes(): Dish[]{
    return DISHES;
  }

  // return dish correspond to the id
  getDish(id: number): Dish{
    // Apply filterring in an array | return an array -> just get 1st one
      // Addon function - Instead of writting a full function, use ShortFunction ~ Lambda by using "=>"
    return DISHES.filter((dish) => (dish.id === id))[0];
  }

  // get featured
  getFeaturedDish(): Dish{
    // If featured=true -> return dish obj
    return DISHES.filter((dish) => (dish.featured))[0];
  }



}
