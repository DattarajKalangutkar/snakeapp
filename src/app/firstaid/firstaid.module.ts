import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FirstaidPageRoutingModule } from './firstaid-routing.module';

import { FirstaidPage } from './firstaid.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FirstaidPageRoutingModule
  ],
  declarations: [FirstaidPage]
})
export class FirstaidPageModule {}
