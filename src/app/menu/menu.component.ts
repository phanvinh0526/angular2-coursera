
import { Component, OnInit } from '@angular/core';

import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';



@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})

export class MenuComponent implements OnInit {

  // Create new variable
  dishes: Dish[] = DISHES;

  // Select Variable
  selectedDish: Dish;

  
  constructor() { }

  ngOnInit() {
  }

  // Defind a method / function
  onSelect(dish: Dish){
    this.selectedDish = dish;

  }

}
