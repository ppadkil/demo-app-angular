import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingAttendeeListComponent } from './training-attendee-list.component';

describe('TrainingAttendeeListComponent', () => {
  let component: TrainingAttendeeListComponent;
  let fixture: ComponentFixture<TrainingAttendeeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainingAttendeeListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingAttendeeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
