import { Injectable } from '@angular/core';
import { HabitItem } from '../model/HabitItem';

@Injectable({
  providedIn: 'root',
})
export class HabitService {
  private habitItems: HabitItem[] = [
    {
      id: 'habit1',
      name: 'Morning Run',
      description: '30-minute run every morning',
      frequency: 5,
      duration: 3,
      startDate: new Date(2023, 0, 1), // January 1, 2023
      color: '#4ECDC4',
      isSelected: true,
      totalDone: 100,
      weeklyDone: 3,
    },
    {
      id: 'habit2',
      name: 'Read a Book',
      description: 'Read for at least 30 minutes before bed',
      frequency: 7, // Every day
      duration: 6, // For 6 months
      startDate: new Date(2023, 0, 15), // January 15, 2023
      color: '#AED9E0',
      isSelected: false,
      totalDone: 20,
      weeklyDone: 5,
    },
    {
      id: 'habit3',
      name: 'Meditation',
      description: 'Morning meditation for mindfulness',
      frequency: 3, // Three times a week
      duration: 2, // For 2 months
      startDate: new Date(2023, 1, 1), // February 1, 2023
      color: '#A0DAA9',
      isSelected: true,
      totalDone: 100,
      weeklyDone: 3,
    },
  ];
  constructor() {}

  getHabits(): HabitItem[] {
    return this.habitItems;
  }

  addHabit(habit: HabitItem) {
    this.habitItems.push(habit);
  }
}
