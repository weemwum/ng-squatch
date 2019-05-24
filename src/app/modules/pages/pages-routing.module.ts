import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomerListComponent } from './customer-list/customer-list.component';
import { LandingComponent } from './landing/landing.component';


const routes: Routes = [
  {
   path: '',
   component: LandingComponent
 },
 {
  path: 'customers',
  component: CustomerListComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
