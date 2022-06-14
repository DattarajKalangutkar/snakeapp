import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AchivementPageRoutingModule } from './achivement-routing.module';

import { AchivementPage } from './achivement.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AchivementPageRoutingModule
  ],
  declarations: [AchivementPage]
})
export class AchivementPageModule {}
