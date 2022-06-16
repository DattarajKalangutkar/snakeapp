import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WildlifePage } from './wildlife.page';

const routes: Routes = [
  {
    path: '',
    component: WildlifePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WildlifePageRoutingModule {}
