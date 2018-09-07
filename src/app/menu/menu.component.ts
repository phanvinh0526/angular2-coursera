
import { Component, OnInit } from '@angular/core';

import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';

import { DishService } from '../services/dish.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})

export class MenuComponent implements OnInit {

  // Create new variable
  // dishes: Dish[] = DISHES;
  dishes: Dish[];

  // Select Variable
  selectedDish: Dish;


  constructor(private dishService: DishService) { }

  ngOnInit() {
    this.dishes = this.dishService.getDishes();

  }

  // Defind a method / function
  onSelect(dish: Dish){
    this.selectedDish = dish;

  }

}
