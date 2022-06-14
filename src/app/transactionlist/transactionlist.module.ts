import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TransactionlistPageRoutingModule } from './transactionlist-routing.module';

import { TransactionlistPage } from './transactionlist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TransactionlistPageRoutingModule
  ],
  declarations: [TransactionlistPage]
})
export class TransactionlistPageModule {}
