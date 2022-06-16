import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SnakedetailPage } from './snakedetail.page';

const routes: Routes = [
  {
    path: '',
    component: SnakedetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SnakedetailPageRoutingModule {}
