import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SnakedetailsPageRoutingModule } from './snakedetails-routing.module';

import { SnakedetailsPage } from './snakedetails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SnakedetailsPageRoutingModule
  ],
  declarations: [SnakedetailsPage]
})
export class SnakedetailsPageModule {}
