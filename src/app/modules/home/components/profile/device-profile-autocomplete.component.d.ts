import { ElementRef, EventEmitter, NgZone, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ControlValueAccessor, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '@app/core/core.state';
import { TranslateService } from '@ngx-translate/core';
import { TruncatePipe } from '@shared//pipe/truncate.pipe';
import { MatDialog } from '@angular/material/dialog';
import { DeviceProfileId } from '@shared/models/id/device-profile-id';
import { DeviceProfile, DeviceProfileInfo, DeviceTransportType } from '@shared/models/device.models';
import { DeviceProfileService } from '@core/http/device-profile.service';
import { MatAutocomplete } from '@angular/material/autocomplete';
import { SubscriptSizing } from '@angular/material/form-field';
import * as i0 from "@angular/core";
export declare class DeviceProfileAutocompleteComponent implements ControlValueAccessor, OnInit, OnChanges {
    private store;
    translate: TranslateService;
    truncate: TruncatePipe;
    private deviceProfileService;
    private fb;
    private zone;
    private dialog;
    selectDeviceProfileFormGroup: UntypedFormGroup;
    modelValue: DeviceProfileId | null;
    subscriptSizing: SubscriptSizing;
    selectDefaultProfile: boolean;
    selectFirstProfile: boolean;
    displayAllOnEmpty: boolean;
    editProfileEnabled: boolean;
    addNewProfile: boolean;
    showDetailsPageLink: boolean;
    transportType: DeviceTransportType;
    required: boolean;
    disabled: boolean;
    hint: string;
    deviceProfileUpdated: EventEmitter<DeviceProfileId>;
    deviceProfileChanged: EventEmitter<DeviceProfileInfo>;
    deviceProfileInput: ElementRef;
    deviceProfileAutocomplete: MatAutocomplete;
    filteredDeviceProfiles: Observable<Array<DeviceProfileInfo>>;
    searchText: string;
    deviceProfileURL: string;
    private dirty;
    private ignoreClosedPanel;
    private allDeviceProfile;
    private propagateChange;
    constructor(store: Store<AppState>, translate: TranslateService, truncate: TruncatePipe, deviceProfileService: DeviceProfileService, fb: UntypedFormBuilder, zone: NgZone, dialog: MatDialog);
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    selectDefaultDeviceProfileIfNeeded(): void;
    selectFirstDeviceProfileIfNeeded(): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: DeviceProfileId | null): void;
    onFocus(): void;
    onPanelClosed(): void;
    updateView(deviceProfile: DeviceProfileInfo | null): void;
    displayDeviceProfileFn(profile?: DeviceProfileInfo): string | undefined;
    fetchDeviceProfiles(searchText?: string): Observable<Array<DeviceProfileInfo>>;
    clear(): void;
    textIsNotEmpty(text: string): boolean;
    deviceProfileEnter($event: KeyboardEvent): void;
    createDeviceProfile($event: Event, profileName: string): void;
    editDeviceProfile($event: Event): void;
    openDeviceProfileDialog(deviceProfile: DeviceProfile, isAdd: boolean): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DeviceProfileAutocompleteComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DeviceProfileAutocompleteComponent, "tb-device-profile-autocomplete", never, { "subscriptSizing": "subscriptSizing"; "selectDefaultProfile": "selectDefaultProfile"; "selectFirstProfile": "selectFirstProfile"; "displayAllOnEmpty": "displayAllOnEmpty"; "editProfileEnabled": "editProfileEnabled"; "addNewProfile": "addNewProfile"; "showDetailsPageLink": "showDetailsPageLink"; "transportType": "transportType"; "required": "required"; "disabled": "disabled"; "hint": "hint"; }, { "deviceProfileUpdated": "deviceProfileUpdated"; "deviceProfileChanged": "deviceProfileChanged"; }, never, never, false, never>;
}
