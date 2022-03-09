import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderTrucksSquareComponent } from './slider-trucks-square.component';

describe('SliderTrucksSquareComponent', () => {
  let component: SliderTrucksSquareComponent;
  let fixture: ComponentFixture<SliderTrucksSquareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SliderTrucksSquareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderTrucksSquareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
