import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForecastDaysComponent } from './forecast-days.component';

describe('ForecastDaysComponent', () => {
  let component: ForecastDaysComponent;
  let fixture: ComponentFixture<ForecastDaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForecastDaysComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForecastDaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
