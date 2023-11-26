import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'habit-list',
    loadChildren: () => import('./habit-list/habit-list.module').then( m => m.HabitListPageModule)
  },
  {
    path: '',
    redirectTo: 'habit-list',
    pathMatch: 'full'
  },
  {
    path: 'habit-item',
    loadChildren: () => import('./habit-item/habit-item.module').then( m => m.HabitItemPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
