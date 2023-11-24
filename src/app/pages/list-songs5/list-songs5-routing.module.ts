import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListSongs5Page } from './list-songs5.page';

const routes: Routes = [
  {
    path: '',
    component: ListSongs5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListSongs5PageRoutingModule {}
