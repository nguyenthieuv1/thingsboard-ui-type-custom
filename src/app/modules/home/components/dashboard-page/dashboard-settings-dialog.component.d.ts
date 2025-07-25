import { OnInit } from '@angular/core';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, FormGroupDirective, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DialogComponent } from '@app/shared/components/dialog.component';
import { UtilsService } from '@core/services/utils.service';
import { TranslateService } from '@ngx-translate/core';
import { DashboardSettings, GridSettings } from '@app/shared/models/dashboard.models';
import { DashboardUtilsService } from '@core/services/dashboard-utils.service';
import { StatesControllerService } from './states/states-controller.service';
import * as i0 from "@angular/core";
export interface DashboardSettingsDialogData {
    settings?: DashboardSettings;
    gridSettings?: GridSettings;
}
export declare class DashboardSettingsDialogComponent extends DialogComponent<DashboardSettingsDialogComponent, DashboardSettingsDialogData> implements OnInit, ErrorStateMatcher {
    protected store: Store<AppState>;
    protected router: Router;
    data: DashboardSettingsDialogData;
    private errorStateMatcher;
    dialogRef: MatDialogRef<DashboardSettingsDialogComponent, DashboardSettingsDialogData>;
    private fb;
    private utils;
    private dashboardUtils;
    private translate;
    private statesControllerService;
    settings: DashboardSettings;
    gridSettings: GridSettings;
    settingsFormGroup: UntypedFormGroup;
    gridSettingsFormGroup: UntypedFormGroup;
    stateControllerIds: string[];
    submitted: boolean;
    constructor(store: Store<AppState>, router: Router, data: DashboardSettingsDialogData, errorStateMatcher: ErrorStateMatcher, dialogRef: MatDialogRef<DashboardSettingsDialogComponent, DashboardSettingsDialogData>, fb: UntypedFormBuilder, utils: UtilsService, dashboardUtils: DashboardUtilsService, translate: TranslateService, statesControllerService: StatesControllerService);
    ngOnInit(): void;
    isErrorState(control: UntypedFormControl | null, form: FormGroupDirective | NgForm | null): boolean;
    cancel(): void;
    save(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DashboardSettingsDialogComponent, [null, null, null, { skipSelf: true; }, null, null, null, null, null, null]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DashboardSettingsDialogComponent, "tb-dashboard-settings-dialog", never, {}, {}, never, never, false, never>;
}
