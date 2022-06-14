import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SearchrescuerPageRoutingModule } from './searchrescuer-routing.module';
import { SearchrescuerPage } from './searchrescuer.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicStorageModule } from '@ionic/storage-angular';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchrescuerPageRoutingModule,
    IonicStorageModule.forRoot()
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [SearchrescuerPage]
})
export class SearchrescuerPageModule {}
