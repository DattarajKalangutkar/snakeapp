import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserhomePageRoutingModule } from './userhome-routing.module';

import { UserhomePage } from './userhome.page';
import { IonicStorageModule } from '@ionic/storage-angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserhomePageRoutingModule,
    IonicStorageModule.forRoot()
  ],
  declarations: [UserhomePage]
})
export class UserhomePageModule {}
