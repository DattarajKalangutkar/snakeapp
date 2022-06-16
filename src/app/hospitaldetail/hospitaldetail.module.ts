import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HospitaldetailPageRoutingModule } from './hospitaldetail-routing.module';

import { HospitaldetailPage } from './hospitaldetail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HospitaldetailPageRoutingModule
  ],
  declarations: [HospitaldetailPage]
})
export class HospitaldetailPageModule {}
