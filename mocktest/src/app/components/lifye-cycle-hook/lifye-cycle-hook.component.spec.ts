import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifyeCycleHookComponent } from './lifye-cycle-hook.component';

describe('LifyeCycleHookComponent', () => {
  let component: LifyeCycleHookComponent;
  let fixture: ComponentFixture<LifyeCycleHookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LifyeCycleHookComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LifyeCycleHookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
