import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RhomepagePageRoutingModule } from './rhomepage-routing.module';

import { RhomepagePage } from './rhomepage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RhomepagePageRoutingModule
  ],
  declarations: [RhomepagePage]
})
export class RhomepagePageModule {}
