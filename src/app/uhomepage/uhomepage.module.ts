import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UhomepagePageRoutingModule } from './uhomepage-routing.module';

import { UhomepagePage } from './uhomepage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UhomepagePageRoutingModule
  ],
  declarations: [UhomepagePage]
})
export class UhomepagePageModule {}
