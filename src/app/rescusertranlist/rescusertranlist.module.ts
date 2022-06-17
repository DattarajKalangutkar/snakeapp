import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RescusertranlistPageRoutingModule } from './rescusertranlist-routing.module';

import { RescusertranlistPage } from './rescusertranlist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RescusertranlistPageRoutingModule
  ],
  declarations: [RescusertranlistPage]
})
export class RescusertranlistPageModule {}
