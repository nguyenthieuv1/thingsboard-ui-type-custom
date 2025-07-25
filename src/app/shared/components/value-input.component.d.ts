import { OnInit } from '@angular/core';
import { ControlValueAccessor, NgForm } from '@angular/forms';
import { ValueType } from '@shared/models/constants';
import { MatDialog } from '@angular/material/dialog';
import * as i0 from "@angular/core";
export declare class ValueInputComponent implements OnInit, ControlValueAccessor {
    dialog: MatDialog;
    disabled: boolean;
    requiredText: string;
    inputForm: NgForm;
    modelValue: any;
    valueType: ValueType;
    valueTypeEnum: typeof ValueType;
    valueTypeKeys: string[];
    valueTypes: Map<ValueType, import("@shared/models/constants").ValueTypeData>;
    private propagateChange;
    constructor(dialog: MatDialog);
    ngOnInit(): void;
    openEditJSONDialog($event: Event): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: any): void;
    updateView(): void;
    onValueTypeChanged(): void;
    onValueChanged(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ValueInputComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ValueInputComponent, "tb-value-input", never, { "disabled": "disabled"; "requiredText": "requiredText"; }, {}, never, never, false, never>;
}
