import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FirstaidPage } from './firstaid.page';

const routes: Routes = [
  {
    path: '',
    component: FirstaidPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FirstaidPageRoutingModule {}
