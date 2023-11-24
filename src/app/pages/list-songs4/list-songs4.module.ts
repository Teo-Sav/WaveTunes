import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListSongs4PageRoutingModule } from './list-songs4-routing.module';

import { ListSongs4Page } from './list-songs4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListSongs4PageRoutingModule
  ],
  declarations: [ListSongs4Page]
})
export class ListSongs4PageModule {}
