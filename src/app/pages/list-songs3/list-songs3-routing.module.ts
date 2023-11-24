import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListSongs3Page } from './list-songs3.page';

const routes: Routes = [
  {
    path: '',
    component: ListSongs3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListSongs3PageRoutingModule {}
