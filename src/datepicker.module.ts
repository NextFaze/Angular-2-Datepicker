import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { DatepickerComponent } from './datepicker.component';

export * from './datepicker.component';

@NgModule({
  declarations: [DatepickerComponent],
  exports: [DatepickerComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MaterialModule.forRoot()]
})
export class DatepickerModule { }
