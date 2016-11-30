/*!
 * calendar: a port of the calendar module from Python
 * Copyright(c) 2011 Luciano Ramalho <luciano@ramalho.org>
 * MIT Licensed
 */
export declare class Calendar {
    static JAN: string;
    static FEB: string;
    static MAR: string;
    static APR: string;
    static MAY: string;
    static JUN: string;
    static JUL: string;
    static AUG: string;
    static SEP: string;
    static OCT: string;
    static NOV: string;
    static DEC: string;
    firstWeekDay: number;
    constructor(firstWeekDay?: number);
    weekStartDate(date: any): Date;
    monthDates(year: any, month: any, dayFormatter?: any, weekFormatter?: any): any[];
    monthDays(year: any, month: any): any[];
    monthText(year: any, month: any): string;
}
