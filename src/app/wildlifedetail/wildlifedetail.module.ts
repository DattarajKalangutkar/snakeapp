import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WildlifedetailPageRoutingModule } from './wildlifedetail-routing.module';

import { WildlifedetailPage } from './wildlifedetail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WildlifedetailPageRoutingModule
  ],
  declarations: [WildlifedetailPage]
})
export class WildlifedetailPageModule {}
