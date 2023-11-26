export type HabitItem = {
  id: string; // Unique identifier for the habit
  name: string; // Name of the habit
  description: string; // Description of the habit
  frequency: number; // Frequency per week
  duration: number; // Duration in weeks
  startDate: Date; // Start date of tracking the habit
  color: string; // Color associated with the habit
  isSelected: boolean;
  totalDone: number;
  weeklyDone: number;
};
