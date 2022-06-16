import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SnakeinfoPageRoutingModule } from './snakeinfo-routing.module';

import { SnakeinfoPage } from './snakeinfo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SnakeinfoPageRoutingModule
  ],
  declarations: [SnakeinfoPage]
})
export class SnakeinfoPageModule {}
