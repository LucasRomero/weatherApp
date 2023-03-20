import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForecastDaysComponent } from './forecast-days.component';

@NgModule({
  declarations: [ForecastDaysComponent],
  imports: [CommonModule],
  exports: [ForecastDaysComponent]
})
export class ForecastDaysModule {}
