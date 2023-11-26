import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HabitItem } from '../model/HabitItem';
import { HabitService } from '../service/HabitService';

@Component({
  selector: 'app-habit-list',
  templateUrl: 'habit-list.page.html',
  styleUrls: ['habit-list.page.scss'],
})
export class HabitListPage {
  constructor(private router: Router, private habitService: HabitService) {}

  get habitItems() {
    return this.habitService.getHabits();
  }

  getFrequencyArray(frequency: number): number[] {
    return Array.from({ length: frequency }, (_, i) => i + 1);
  }

  getWeeklyProgress(habit: HabitItem) {
    // Increment weeklyDone if the habit is selected and not yet completed for the week
    if (habit.isSelected && habit.weeklyDone < habit.frequency) {
      return habit.weeklyDone + 1;
    }

    // Decrement weeklyDone if the habit is not selected and it has reached its weekly frequency
    if (!habit.isSelected && habit.weeklyDone === habit.frequency) {
      return habit.weeklyDone - 1;
    }

    // In all other cases, return the current weeklyDone value
    return habit.weeklyDone;
  }

  addHabit() {
    // Navigate to the habit-item page
    this.router.navigateByUrl('/habit-item');
  }

  toggleHabitSelection(habit: HabitItem) {
    habit.isSelected = !habit.isSelected;
  }
}
