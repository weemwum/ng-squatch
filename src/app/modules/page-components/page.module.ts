import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { PageRoutingModule } from './page-routing.module';
import { TopheaderComponent } from './topheader/topheader.component';


@NgModule({
  declarations: [NavbarComponent, FooterComponent, TopheaderComponent],
  imports: [
    CommonModule,
    PageRoutingModule
  ],
  exports: [
    NavbarComponent, FooterComponent, TopheaderComponent
  ]
})
export class PageModule { }
