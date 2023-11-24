import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListSongs3PageRoutingModule } from './list-songs3-routing.module';

import { ListSongs3Page } from './list-songs3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListSongs3PageRoutingModule
  ],
  declarations: [ListSongs3Page]
})
export class ListSongs3PageModule {}
