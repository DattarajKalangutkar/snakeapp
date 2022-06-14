import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchrescuerPage } from './searchrescuer.page';

const routes: Routes = [
  {
    path: '',
    component: SearchrescuerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchrescuerPageRoutingModule {}
