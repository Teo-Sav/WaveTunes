import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListSongs4Page } from './list-songs4.page';

const routes: Routes = [
  {
    path: '',
    component: ListSongs4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListSongs4PageRoutingModule {}
