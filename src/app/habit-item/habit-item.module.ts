import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HabitItemPageRoutingModule } from './habit-item-routing.module';

import { HabitItemPage } from './habit-item.page';
import { SharedModule } from '../shared.module';
import { ColorPickerModule } from 'ngx-color-picker';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HabitItemPageRoutingModule,
    SharedModule,
  ],
  declarations: [HabitItemPage],
  providers: [DatePipe],
})
export class HabitItemPageModule {}
