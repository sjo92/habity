import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HabitItemPage } from './habit-item.page';

const routes: Routes = [
  {
    path: '',
    component: HabitItemPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HabitItemPageRoutingModule {}
