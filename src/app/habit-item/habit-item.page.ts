import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { HabitItem } from '../model/HabitItem';
import { DatePipe } from '@angular/common';
import { HabitService } from '../service/HabitService';

@Component({
  selector: 'app-habit-item',
  templateUrl: 'habit-item.page.html',
  styleUrls: ['habit-item.page.scss'],
})
export class HabitItemPage {
  @Output() newHabit = new EventEmitter<HabitItem>();

  selectedFrequency: number = 1;
  formattedStartDate: string | null = null;
  habit = {
    name: '',
    description: '',
    frequency: 1,
    duration: 0,
    startDate: new Date(),
    color: '#FF6B6B', // Default color,
    isSelected: false,
    totalDone: 0,
    weeklyDone: 0,
  };

  constructor(
    private router: Router,
    private datePipe: DatePipe,
    private habitService: HabitService
  ) {}

  selectFrequency(num: number) {
    this.selectedFrequency = num;
    this.habit.frequency = num;
  }

  updateFormattedStartDate(date: string | string[] | null | undefined) {
    if (typeof date !== 'string') {
      console.error('Invalid date type:', date);
      return;
    }
    console.log('Received date:', date);
    this.formattedStartDate = this.datePipe.transform(date, 'yyyy-MM-dd');
    this.habit.startDate = new Date(date);
    console.log('Updated startDate:', this.habit.startDate);
  }

  clearStartDate() {
    this.formattedStartDate = null;
  }

  onColorSelected(color: string) {
    this.habit.color = color;
  }

  submitHabit(habitItem: HabitItem) {
    console.log('Habit Data:', habitItem);
    console.log('startDAte', habitItem.startDate);
    this.habitService.addHabit(habitItem);
    this.router.navigateByUrl('/habit-list');
  }
}
