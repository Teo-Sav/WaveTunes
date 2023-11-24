import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'list-songs',
    loadChildren: () => import('./pages/list-songs/list-songs.module').then( m => m.ListSongsPageModule)
  },
  {
    path: 'list-songs2',
    loadChildren: () => import('./pages/list-songs2/list-songs2.module').then( m => m.ListSongs2PageModule)
  },
  {
    path: 'list-songs3',
    loadChildren: () => import('./pages/list-songs3/list-songs3.module').then( m => m.ListSongs3PageModule)
  },
  {
    path: 'list-songs4',
    loadChildren: () => import('./pages/list-songs4/list-songs4.module').then( m => m.ListSongs4PageModule)
  },
  {
    path: 'list-songs5',
    loadChildren: () => import('./pages/list-songs5/list-songs5.module').then( m => m.ListSongs5PageModule)
  },
  {
    path: 'list-songs6',
    loadChildren: () => import('./pages/list-songs6/list-songs6.module').then( m => m.ListSongs6PageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
