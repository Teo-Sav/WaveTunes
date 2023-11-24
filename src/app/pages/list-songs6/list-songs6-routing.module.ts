import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListSongs6Page } from './list-songs6.page';

const routes: Routes = [
  {
    path: '',
    component: ListSongs6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListSongs6PageRoutingModule {}
