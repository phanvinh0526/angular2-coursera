import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Import Angylar Animations Module, Materials Toolbar, Flex Layout
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar'; 
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';


import 'hammerjs';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { DishdetailComponent } from './dishdetail/dishdetail.component';

import { DishService } from './services/dish.service';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component'; 

// Declare a routing module
import { AppRoutingModule } from './app-routing/app-routing.module';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DishdetailComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,

    // Import Modules
    BrowserAnimationsModule,
    MatToolbarModule,
    FlexLayoutModule,

    // Import Routing module
    AppRoutingModule

  ],
  providers: [ DishService ], // Angular looks here, then inject it where required
  bootstrap: [AppComponent]
})
export class AppModule { }
