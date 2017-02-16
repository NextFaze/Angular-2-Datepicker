import {AfterViewInit, Component, Input, QueryList, ViewChild} from '@angular/core';
import {FormControl} from '@angular/forms';
import {MdHint} from '@angular/material';

@Component({
  selector: 'my-app',
  styles: [`
    material-datepicker {
      width: 100%;
    }
    `],
  template: `
      <material-datepicker
        (onSelect)="onSelect($event)"
        [formControl]="dateControl"
        dateFormat="YYYY-MM-DD"
        [rangeEnd]="testRangeDate"
      ><md-hint>Md Hint</md-hint></material-datepicker>

      <button (click)="setToday()">today</button>
      <button (click)="clearDate()">reset</button>
      <hr>
      {{ dateControl.value }}
      <p>
      Mirror(disabled, DD-MM-YYYY):
      <material-datepicker
      [formControl]="dateControl"
        placeholder="nothing is selected"
        disabled="true"
        [dateFormat]="formatDate"
      ></material-datepicker>

    `
})
export class AppComponent {
  date = new Date();
  dateControl = new FormControl(this.date);
  disabled: boolean;
  @Input() testRangeDate: Date;
  constructor() {
    this.testRangeDate = new Date();
  }

  formatDate(date: Date): string {
    return date.toLocaleString();
  }

  onSelect(date: Date) {
    console.log('onSelect: ', date);
  }
  clearDate() {
    this.dateControl.reset();
  }
  setToday() {
    this.dateControl.setValue(new Date());
  }
}
