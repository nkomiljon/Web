import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogCardSquareComponent } from './catalog-card-square.component';

describe('CatalogCardSquareComponent', () => {
  let component: CatalogCardSquareComponent;
  let fixture: ComponentFixture<CatalogCardSquareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatalogCardSquareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogCardSquareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
