import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MavericInterviewTaskComponent } from './maveric-interview-task.component';

describe('MavericInterviewTaskComponent', () => {
  let component: MavericInterviewTaskComponent;
  let fixture: ComponentFixture<MavericInterviewTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MavericInterviewTaskComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MavericInterviewTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
