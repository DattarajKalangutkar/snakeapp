import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdatetransPageRoutingModule } from './updatetrans-routing.module';

import { UpdatetransPage } from './updatetrans.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdatetransPageRoutingModule
  ],
  declarations: [UpdatetransPage]
})
export class UpdatetransPageModule {}
