import { Resolve, Router } from '@angular/router';
import { TenantProfile } from '@shared/models/tenant.model';
import { EntityTableConfig, HeaderActionDescriptor } from '@home/models/entity/entities-table-config.models';
import { TranslateService } from '@ngx-translate/core';
import { DatePipe } from '@angular/common';
import { EntityAction } from '@home/models/entity/entity-component.models';
import { TenantProfileService } from '@core/http/tenant-profile.service';
import { DialogService } from '@core/services/dialog.service';
import { ImportExportService } from '@home/components/import-export/import-export.service';
import * as i0 from "@angular/core";
export declare class TenantProfilesTableConfigResolver implements Resolve<EntityTableConfig<TenantProfile>> {
    private tenantProfileService;
    private importExport;
    private translate;
    private datePipe;
    private router;
    private dialogService;
    private readonly config;
    constructor(tenantProfileService: TenantProfileService, importExport: ImportExportService, translate: TranslateService, datePipe: DatePipe, router: Router, dialogService: DialogService);
    resolve(): EntityTableConfig<TenantProfile>;
    configureAddActions(): Array<HeaderActionDescriptor>;
    private openTenantProfile;
    setDefaultTenantProfile($event: Event, tenantProfile: TenantProfile): void;
    importTenantProfile($event: Event): void;
    exportTenantProfile($event: Event, tenantProfile: TenantProfile): void;
    onTenantProfileAction(action: EntityAction<TenantProfile>): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<TenantProfilesTableConfigResolver, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<TenantProfilesTableConfigResolver>;
}
