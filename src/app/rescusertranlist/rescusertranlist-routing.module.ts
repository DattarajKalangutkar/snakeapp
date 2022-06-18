import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RescusertranlistPage } from './rescusertranlist.page';

const routes: Routes = [
  {
    path: '',
    component: RescusertranlistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RescusertranlistPageRoutingModule {}
