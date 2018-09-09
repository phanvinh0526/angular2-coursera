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
    // Redirect all other URLs to HomePag
    {path: '', redirectTo: '/home', pathMatch: 'full'},

    // Define other components
    {path: 'menu', component: MenuComponent},
    {path: 'dishdetail/:id', component: DishdetailComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'about', component: AboutComponent},
     
];
