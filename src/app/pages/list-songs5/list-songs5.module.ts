import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListSongs5PageRoutingModule } from './list-songs5-routing.module';

import { ListSongs5Page } from './list-songs5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListSongs5PageRoutingModule
  ],
  declarations: [ListSongs5Page]
})
export class ListSongs5PageModule {}
