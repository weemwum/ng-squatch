import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { LandingComponent } from './landing/landing.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [CustomerListComponent, LandingComponent, NotFoundComponent],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
