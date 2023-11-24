import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListSongs2Page } from './list-songs2.page';

const routes: Routes = [
  {
    path: '',
    component: ListSongs2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListSongs2PageRoutingModule {}
