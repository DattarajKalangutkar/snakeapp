import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TransactionlistPage } from './transactionlist.page';

const routes: Routes = [
  {
    path: '',
    component: TransactionlistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransactionlistPageRoutingModule {}
