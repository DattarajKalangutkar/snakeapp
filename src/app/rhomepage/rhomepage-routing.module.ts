import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RhomepagePage } from './rhomepage.page';

const routes: Routes = [
  {
    path: '',
    component: RhomepagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RhomepagePageRoutingModule {}
