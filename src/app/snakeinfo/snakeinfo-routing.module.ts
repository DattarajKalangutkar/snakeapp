import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SnakeinfoPage } from './snakeinfo.page';

const routes: Routes = [
  {
    path: '',
    component: SnakeinfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SnakeinfoPageRoutingModule {}
