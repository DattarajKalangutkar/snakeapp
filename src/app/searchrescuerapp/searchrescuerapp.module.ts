import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchrescuerappPageRoutingModule } from './searchrescuerapp-routing.module';

import { SearchrescuerappPage } from './searchrescuerapp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchrescuerappPageRoutingModule
  ],
  declarations: [SearchrescuerappPage]
})
export class SearchrescuerappPageModule {}
