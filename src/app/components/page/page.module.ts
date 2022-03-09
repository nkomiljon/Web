import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageRoutingModule } from './page-routing.module';
import { PageComponent } from "./page.component";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { HeaderBottomComponent } from "../../shared/header-bottom/header-bottom.component";
import { SharedModule } from "../../shared/shared.module";
import { BodyComponent } from './body/body.component';


@NgModule({
  declarations: [
    PageComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent
  ],
  imports: [
    CommonModule,
    PageRoutingModule,
    SharedModule
  ]
})
export class PageModule { }
