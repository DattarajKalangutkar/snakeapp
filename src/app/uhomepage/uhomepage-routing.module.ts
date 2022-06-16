import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UhomepagePage } from './uhomepage.page';

const routes: Routes = [
  {
    path: '',
    component: UhomepagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UhomepagePageRoutingModule {}
