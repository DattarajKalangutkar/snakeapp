import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchrescuerappPage } from './searchrescuerapp.page';

const routes: Routes = [
  {
    path: '',
    component: SearchrescuerappPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchrescuerappPageRoutingModule {}
