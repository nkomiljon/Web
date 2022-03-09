import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderTrucksComponent } from './slider-trucks.component';

describe('SliderTrucksComponent', () => {
  let component: SliderTrucksComponent;
  let fixture: ComponentFixture<SliderTrucksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SliderTrucksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderTrucksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
