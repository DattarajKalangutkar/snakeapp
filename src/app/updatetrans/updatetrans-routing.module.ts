import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdatetransPage } from './updatetrans.page';

const routes: Routes = [
  {
    path: '',
    component: UpdatetransPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdatetransPageRoutingModule {}
