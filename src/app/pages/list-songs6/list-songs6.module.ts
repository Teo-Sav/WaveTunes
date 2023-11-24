import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListSongs6PageRoutingModule } from './list-songs6-routing.module';

import { ListSongs6Page } from './list-songs6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListSongs6PageRoutingModule
  ],
  declarations: [ListSongs6Page]
})
export class ListSongs6PageModule {}
