import { FormControl } from '@angular/forms';
export declare class AppComponent {
    date: Date;
    dateControl: FormControl;
    disabled: boolean;
    testRangeDate: Date;
    constructor();
    formatDate(date: Date): string;
    onSelect(date: Date): void;
    clearDate(): void;
    setToday(): void;
}
