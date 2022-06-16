import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WildlifePageRoutingModule } from './wildlife-routing.module';

import { WildlifePage } from './wildlife.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WildlifePageRoutingModule
  ],
  declarations: [WildlifePage]
})
export class WildlifePageModule {}
