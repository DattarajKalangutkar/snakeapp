import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TransactionlistPageRoutingModule } from './transactionlist-routing.module';
import { TransactionlistPage } from './transactionlist.page';
import { IonicStorageModule } from '@ionic/storage-angular';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TransactionlistPageRoutingModule,
    IonicStorageModule.forRoot()
  ],
  declarations: [TransactionlistPage]
})
export class TransactionlistPageModule {}
