import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultistepParentComponent } from './multistep-parent.component';

describe('MultistepParentComponent', () => {
  let component: MultistepParentComponent;
  let fixture: ComponentFixture<MultistepParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MultistepParentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultistepParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
