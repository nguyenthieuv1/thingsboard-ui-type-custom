import { ElementRef, NgZone, OnDestroy, OnInit, ViewContainerRef } from '@angular/core';
import { PageComponent } from '@shared/components/page.component';
import { WidgetContext } from '@home/models/widget-component.models';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { Overlay } from '@angular/cdk/overlay';
import { UtilsService } from '@core/services/utils.service';
import { TranslateService } from '@ngx-translate/core';
import { DataKey, Datasource } from '@shared/models/widget.models';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { AttributeService } from '@core/http/attribute.service';
import { MatDialog } from '@angular/material/dialog';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { MatFormFieldAppearance, SubscriptSizing } from '@angular/material/form-field';
import * as i0 from "@angular/core";
type FieldAlignment = 'row' | 'column';
type MultipleInputWidgetDataKeyType = 'server' | 'shared' | 'timeseries';
export type MultipleInputWidgetDataKeyValueType = 'string' | 'double' | 'integer' | 'JSON' | 'booleanCheckbox' | 'booleanSwitch' | 'dateTime' | 'date' | 'time' | 'select' | 'color';
export type MultipleInputWidgetDataKeyEditableType = 'editable' | 'disabled' | 'readonly';
type ConvertGetValueFunction = (value: any, ctx: WidgetContext) => any;
type ConvertSetValueFunction = (value: any, originValue: any, ctx: WidgetContext) => any;
interface MultipleInputWidgetSettings {
    widgetTitle: string;
    showActionButtons: boolean;
    updateAllValues: boolean;
    saveButtonLabel: string;
    resetButtonLabel: string;
    showResultMessage: boolean;
    showGroupTitle: boolean;
    groupTitle: string;
    fieldsAlignment: FieldAlignment;
    fieldsInRow: number;
    columnGap: number;
    rowGap: number;
    attributesShared?: boolean;
}
interface MultipleInputWidgetSelectOption {
    value: string | null;
    label: string;
}
interface MultipleInputWidgetDataKeySettings {
    dataKeyType: MultipleInputWidgetDataKeyType;
    dataKeyValueType: MultipleInputWidgetDataKeyValueType;
    slideToggleLabelPosition?: 'after' | 'before';
    selectOptions: MultipleInputWidgetSelectOption[];
    required: boolean;
    isEditable: MultipleInputWidgetDataKeyEditableType;
    disabledOnDataKey: string;
    dataKeyHidden: boolean;
    appearance: MatFormFieldAppearance;
    subscriptSizing: SubscriptSizing;
    step?: number;
    minValue?: number;
    maxValue?: number;
    requiredErrorMessage?: string;
    invalidDateErrorMessage?: string;
    minValueErrorMessage?: string;
    maxValueErrorMessage?: string;
    invalidJsonErrorMessage?: string;
    useCustomIcon: boolean;
    icon: string;
    customIcon: string;
    safeCustomIcon?: SafeUrl;
    inputTypeNumber?: boolean;
    readOnly?: boolean;
    disabledOnCondition?: boolean;
    useGetValueFunction?: boolean;
    getValueFunctionBody?: string;
    getValueFunction?: ConvertGetValueFunction;
    useSetValueFunction?: boolean;
    setValueFunctionBody?: string;
    setValueFunction?: ConvertSetValueFunction;
    dialogTitle?: string;
    saveButtonLabel?: string;
    cancelButtonLabel?: string;
}
interface MultipleInputWidgetDataKey extends DataKey {
    formId?: string;
    settings: MultipleInputWidgetDataKeySettings;
    isFocused: boolean;
    value?: any;
}
interface MultipleInputWidgetSource {
    datasource: Datasource;
    keys: MultipleInputWidgetDataKey[];
}
export declare class MultipleInputWidgetComponent extends PageComponent implements OnInit, OnDestroy {
    protected store: Store<AppState>;
    private elementRef;
    private ngZone;
    private overlay;
    private viewContainerRef;
    private utils;
    private fb;
    private attributeService;
    private translate;
    private sanitizer;
    private dialog;
    formContainerRef: ElementRef<HTMLElement>;
    ctx: WidgetContext;
    private formResize$;
    settings: MultipleInputWidgetSettings;
    private widgetConfig;
    private subscription;
    private datasources;
    private destroy$;
    sources: Array<MultipleInputWidgetSource>;
    private isSavingInProgress;
    isVerticalAlignment: boolean;
    columns: number;
    saveButtonLabel: string;
    resetButtonLabel: string;
    entityDetected: boolean;
    datasourceDetected: boolean;
    isAllParametersValid: boolean;
    multipleInputFormGroup: UntypedFormGroup;
    toastTargetId: string;
    constructor(store: Store<AppState>, elementRef: ElementRef, ngZone: NgZone, overlay: Overlay, viewContainerRef: ViewContainerRef, utils: UtilsService, fb: UntypedFormBuilder, attributeService: AttributeService, translate: TranslateService, sanitizer: DomSanitizer, dialog: MatDialog);
    ngOnInit(): void;
    ngOnDestroy(): void;
    private initializeConfig;
    private updateDatasources;
    private buildForm;
    private updateWidgetData;
    private getKeyValue;
    private updateColumns;
    onDataUpdated(): void;
    private resize;
    getGroupTitle(datasource: Datasource): string;
    getErrorMessageText(keySettings: MultipleInputWidgetDataKeySettings, errorType: string): string;
    getTranslatedErrorText(errorMessage: string, defaultMessage: string, messageValues?: object): string;
    getCustomTranslationText(value: any): string;
    visibleKeys(source: MultipleInputWidgetSource): MultipleInputWidgetDataKey[];
    datePickerType(keyType: MultipleInputWidgetDataKeyValueType): string;
    focusInputElement($event: Event): void;
    inputChanged(source: MultipleInputWidgetSource, key: MultipleInputWidgetDataKey): void;
    colorChanged(source: MultipleInputWidgetSource, key: MultipleInputWidgetDataKey, color: string): void;
    saveForm(): void;
    private save;
    private setKeyValue;
    discardAll(): void;
    openEditJSONDialog($event: Event, key: MultipleInputWidgetDataKey, source: MultipleInputWidgetSource): void;
    invalid(): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<MultipleInputWidgetComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MultipleInputWidgetComponent, "tb-multiple-input-widget ", never, { "ctx": "ctx"; }, {}, never, never, false, never>;
}
export {};
