// Add router module to the ts file
import { Routes } from '@angular/router';

import { MenuComponent } from '../menu/menu.component';
import { DishdetailComponent } from '../dishdetail/dishdetail.component';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component'; // Declare a service


export const routes: Routes = [
    // Define home component | will navigate Home to HomeComponent / HomePage
    {path: 'home', component: HomeComponent},
    // Define other components
    {path: 'menu', component: MenuComponent},
    // Redirect all other URLs to HomePage
    {path: '', redirectTo: '/home', pathMatch: 'full'}
    // {path: 'about', component: AboutComponent},
     
];
