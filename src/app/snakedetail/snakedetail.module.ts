import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SnakedetailPageRoutingModule } from './snakedetail-routing.module';

import { SnakedetailPage } from './snakedetail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SnakedetailPageRoutingModule
  ],
  declarations: [SnakedetailPage]
})
export class SnakedetailPageModule {}
