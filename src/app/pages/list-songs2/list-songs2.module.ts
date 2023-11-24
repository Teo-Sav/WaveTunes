import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListSongs2PageRoutingModule } from './list-songs2-routing.module';

import { ListSongs2Page } from './list-songs2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListSongs2PageRoutingModule
  ],
  declarations: [ListSongs2Page]
})
export class ListSongs2PageModule {}
