import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SnakedetailsPage } from './snakedetails.page';

const routes: Routes = [
  {
    path: '',
    component: SnakedetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SnakedetailsPageRoutingModule {}
