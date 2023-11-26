import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.scss'],
})
export class ColorPickerComponent {
  @Output() colorSelected = new EventEmitter<string>();

  showColorPicker = false;
  selectedColor: string = '#FF6B6B';
  pickedColor: string = '#000000';
  colors: string[] = [
    '#FF6B6B',
    '#4ECDC4',
    '#C5A3FF',
    '#A0DAA9',
    '#FFC09F',
    '#FFF5B7',
    '#AED9E0',
    '#FAD2E1',
    '#C3B1E1',
    '#FFAAA5',
    '#D0F4DE',
  ];

  selectColor(color: string) {
    this.selectedColor = color;
    this.colorSelected.emit(color);
  }

  openColorPicker() {
    console.log('clicked');
    this.showColorPicker = true;
  }

  addNewColor(color: string) {
    console.log(color);
    this.selectedColor = color;
    this.colorSelected.emit(color);
    this.colors.push(color);
    this.showColorPicker = false;
  }
  constructor() {
    this.showColorPicker = false;
  }
}
