import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { HeaderBottomComponent } from './header-bottom/header-bottom.component';
import { SliderComponent } from './slider/slider.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { FooterTopComponent } from './footer-top/footer-top.component';
import { CatalogCardComponent } from './catalog-card/catalog-card.component';
import { SliderTrucksComponent } from './slider-trucks/slider-trucks.component';
import { TopComponent } from './top/top.component';
import { SliderTrucksSquareComponent } from './slider-trucks-square/slider-trucks-square.component';


@NgModule({
  declarations: [
    HeaderBottomComponent,
    SliderComponent,
    SidebarComponent,
    CarouselComponent,
    FooterTopComponent,
    CatalogCardComponent,
    SliderTrucksComponent,
    TopComponent,
    SliderTrucksSquareComponent
  ],
  exports: [
    HeaderBottomComponent,
    SliderComponent,
    CarouselComponent,
    FooterTopComponent,
    SidebarComponent,
    CatalogCardComponent,
    SliderTrucksComponent,
    TopComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ]
})
export class SharedModule { }
