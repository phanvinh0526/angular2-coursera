import { Component, OnInit } from '@angular/core';

// Apply params to communicate between components
import { Params, ActivatedRoute } from '@angular/router';
// Location : allows track location in maintain page history
import { Location } from '@angular/common';

import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';


@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})
export class DishdetailComponent implements OnInit {

  // Receiving dish as an input
  // @Input()
  dish: Dish;
  // --------------------------

  // Defind class variables / properties
  constructor(private dishservice: DishService, 
      private location: Location,
      private route: ActivatedRoute) {
    
   }

  ngOnInit() {
    // Get param id
    let id =+ this.route.snapshot.params['id'];
    this.dish = this.dishservice.getDish(id);

  }

  goBack(): void{
    // Allow to go back previous item in the menu
    this.location.back();
  }

}
