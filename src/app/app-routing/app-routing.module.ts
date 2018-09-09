import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Add rounter module from Angular library
import { RouterModule, Routes } from '@angular/router';
// Add const variable from "routes" component
import { routes } from './routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)

  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
