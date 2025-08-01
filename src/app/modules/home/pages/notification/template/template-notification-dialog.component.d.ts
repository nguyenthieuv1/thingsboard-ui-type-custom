import { NotificationTemplate, NotificationType } from '@shared/models/notification.models';
import { OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder } from '@angular/forms';
import { NotificationService } from '@core/http/notification.service';
import { Observable } from 'rxjs';
import { StepperOrientation, StepperSelectionEvent } from '@angular/cdk/stepper';
import { MatStepper } from '@angular/material/stepper';
import { BreakpointObserver } from '@angular/cdk/layout';
import { TranslateService } from '@ngx-translate/core';
import { TemplateConfiguration } from '@home/pages/notification/template/template-configuration';
import * as i0 from "@angular/core";
export interface TemplateNotificationDialogData {
    template?: NotificationTemplate;
    predefinedType?: NotificationType;
    isAdd?: boolean;
    isCopy?: boolean;
}
export declare class TemplateNotificationDialogComponent extends TemplateConfiguration<TemplateNotificationDialogComponent, NotificationTemplate> implements OnDestroy {
    protected store: Store<AppState>;
    protected router: Router;
    protected dialogRef: MatDialogRef<TemplateNotificationDialogComponent, NotificationTemplate>;
    data: TemplateNotificationDialogData;
    private breakpointObserver;
    protected fb: FormBuilder;
    private notificationService;
    private translate;
    notificationTemplateStepper: MatStepper;
    stepperOrientation: Observable<StepperOrientation>;
    dialogTitle: string;
    notificationTypes: NotificationType[];
    selectedIndex: number;
    hideSelectType: boolean;
    private readonly templateNotification;
    private authState;
    private authUser;
    constructor(store: Store<AppState>, router: Router, dialogRef: MatDialogRef<TemplateNotificationDialogComponent, NotificationTemplate>, data: TemplateNotificationDialogData, breakpointObserver: BreakpointObserver, fb: FormBuilder, notificationService: NotificationService, translate: TranslateService);
    ngOnDestroy(): void;
    cancel(): void;
    changeStep($event: StepperSelectionEvent): void;
    backStep(): void;
    nextStep(): void;
    nextStepLabel(): string;
    private get maxStepperIndex();
    private add;
    private allValid;
    private isSysAdmin;
    private allowNotificationType;
    static ɵfac: i0.ɵɵFactoryDeclaration<TemplateNotificationDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TemplateNotificationDialogComponent, "tb-template-notification-dialog", never, {}, {}, never, never, false, never>;
}
