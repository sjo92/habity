import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorPickerComponent } from './color-picker/color-picker.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { NgxColorsModule } from 'ngx-colors';

@NgModule({
  declarations: [ColorPickerComponent],
  imports: [CommonModule, IonicModule, FormsModule, NgxColorsModule],
  exports: [ColorPickerComponent], // Export the component
})
export class SharedModule {}
