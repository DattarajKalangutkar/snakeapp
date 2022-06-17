import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompletetransPage } from './completetrans.page';

const routes: Routes = [
  {
    path: '',
    component: CompletetransPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompletetransPageRoutingModule {}
