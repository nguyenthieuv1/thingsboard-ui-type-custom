import { OnInit } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import * as i0 from "@angular/core";
export declare class DatetimeComponent implements OnInit, ControlValueAccessor {
    private requiredValue;
    get required(): boolean;
    set required(value: boolean);
    disabled: boolean;
    dateText: string;
    timeText: string;
    showLabel: boolean;
    minDateValue: Date | null;
    set minDate(minDate: number | null);
    maxDateValue: Date | null;
    set maxDate(maxDate: number | null);
    modelValue: number;
    date: Date;
    private propagateChange;
    constructor();
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    ngOnInit(): void;
    writeValue(datetime: number | null): void;
    updateView(value: number | null): void;
    onDateChange(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DatetimeComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DatetimeComponent, "tb-datetime", never, { "required": "required"; "disabled": "disabled"; "dateText": "dateText"; "timeText": "timeText"; "showLabel": "showLabel"; "minDate": "minDate"; "maxDate": "maxDate"; }, {}, never, never, false, never>;
}
