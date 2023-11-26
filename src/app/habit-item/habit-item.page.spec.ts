import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HabitItemPage } from './habit-item.page';

describe('HabitItemPage', () => {
  let component: HabitItemPage;
  let fixture: ComponentFixture<HabitItemPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HabitItemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
