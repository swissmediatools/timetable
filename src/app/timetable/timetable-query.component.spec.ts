import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimetableQueryComponent } from './timetable-query.component';

describe('TimetableQueryComponent', () => {
  let component: TimetableQueryComponent;
  let fixture: ComponentFixture<TimetableQueryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimetableQueryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimetableQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
