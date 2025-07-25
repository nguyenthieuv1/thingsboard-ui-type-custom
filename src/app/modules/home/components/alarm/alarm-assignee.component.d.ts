import { EventEmitter, ViewContainerRef } from '@angular/core';
import { UtilsService } from '@core/services/utils.service';
import { AlarmAssignee, AlarmInfo } from '@shared/models/alarm.models';
import { Overlay } from '@angular/cdk/overlay';
import { TranslateService } from '@ngx-translate/core';
import * as i0 from "@angular/core";
export declare class AlarmAssigneeComponent {
    private utilsService;
    private overlay;
    private viewContainerRef;
    private translateService;
    alarm: AlarmInfo;
    allowAssign: boolean;
    alarmReassigned: EventEmitter<boolean>;
    constructor(utilsService: UtilsService, overlay: Overlay, viewContainerRef: ViewContainerRef, translateService: TranslateService);
    getAssignee(): any;
    getUserDisplayName(entity: AlarmAssignee): string;
    getUserInitials(entity: AlarmAssignee): string;
    getFullName(entity: AlarmAssignee): string;
    getAvatarBgColor(entity: AlarmAssignee): string;
    openAlarmAssigneePanel($event: Event, alarm: AlarmInfo): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AlarmAssigneeComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AlarmAssigneeComponent, "tb-alarm-assignee", never, { "alarm": "alarm"; "allowAssign": "allowAssign"; }, { "alarmReassigned": "alarmReassigned"; }, never, never, false, never>;
}
