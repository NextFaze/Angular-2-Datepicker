/// <reference types="es6-shim" />
import { ElementRef, EventEmitter, OnChanges, OnInit, Renderer, SimpleChange } from '@angular/core';
import { FormControl } from '@angular/forms';
export declare const DATETIME_VALUE_ACCESSOR: any;
import { Calendar } from './calendar';
export interface DateFormatFunction {
    (date: Date): string;
}
export declare class DatepickerComponent implements OnInit, OnChanges {
    private renderer;
    private elementRef;
    private dateVal;
    dateChange: EventEmitter<Date>;
    writeValue(val: any): void;
    disabled: boolean;
    accentColor: string;
    altInputStyle: boolean;
    dateFormat: string | DateFormatFunction;
    fontFamily: string;
    rangeStart: Date;
    rangeEnd: Date;
    placeholder: string;
    inputText: string;
    showCalendar: boolean;
    onSelect: EventEmitter<Date>;
    calendarDays: Array<number>;
    currentMonth: string;
    dayNames: Array<String>;
    hoveredDay: Date;
    calendar: Calendar;
    currentMonthNumber: number;
    currentYear: number;
    months: Array<string>;
    animate: string;
    colors: {
        [id: string]: string;
    };
    clickListener: Function;
    yearControl: FormControl;
    propagateChange: (_: any) => void;
    constructor(renderer: Renderer, elementRef: ElementRef);
    ngOnInit(): void;
    ngOnChanges(changes: {
        [propertyName: string]: SimpleChange;
    }): void;
    ngOnDestroy(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    onTouched(): void;
    closeCalendar(): void;
    private setCurrentValues(date);
    syncVisualsWithDate(): void;
    setCurrentMonth(monthNumber: number): void;
    setCurrentYear(year: number): void;
    setHoveredDay(day: Date): void;
    removeHoveredDay(day: Date): void;
    setInputText(date: Date): void;
    onArrowClick(direction: string): void;
    onCancel(): void;
    onInputClick(): void;
    onSelectDay(day: Date): void;
    onYearSubmit(): void;
    handleGlobalClick(event: MouseEvent): void;
    getDayBackgroundColor(day: Date): string;
    getDayFontColor(day: Date): string;
    isChosenDay(day: Date): boolean;
    isCurrentDay(day: Date): boolean;
    isHoveredDay(day: Date): boolean;
    triggerAnimation(direction: string): void;
    private inRangeValidator(control);
    private positiveIntegerValidator(control);
}
