import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimetableResultComponent } from './timetable-result.component';

describe('TimetableResultComponent', () => {
  let component: TimetableResultComponent;
  let fixture: ComponentFixture<TimetableResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimetableResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimetableResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
