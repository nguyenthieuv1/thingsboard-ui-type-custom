import { Resolve, Router } from '@angular/router';
import { EntityTableConfig } from '@home/models/entity/entities-table-config.models';
import { OtaPackage, OtaPackageInfo } from '@shared/models/ota-package.models';
import { TranslateService } from '@ngx-translate/core';
import { DatePipe } from '@angular/common';
import { OtaPackageService } from '@core/http/ota-package.service';
import { PageLink } from '@shared/models/page/page-link';
import { EntityAction } from '@home/models/entity/entity-component.models';
import { FileSizePipe } from '@shared/pipe/file-size.pipe';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import * as i0 from "@angular/core";
export declare class OtaUpdateTableConfigResolve implements Resolve<EntityTableConfig<OtaPackage, PageLink, OtaPackageInfo>> {
    private translate;
    private datePipe;
    private store;
    private otaPackageService;
    private router;
    private fileSize;
    private readonly config;
    constructor(translate: TranslateService, datePipe: DatePipe, store: Store<AppState>, otaPackageService: OtaPackageService, router: Router, fileSize: FileSizePipe);
    resolve(): EntityTableConfig<OtaPackage, PageLink, OtaPackageInfo>;
    private openOtaPackage;
    exportPackage($event: Event, otaPackageInfo: OtaPackageInfo): void;
    checksumText(entity: any): string;
    onPackageAction(action: EntityAction<OtaPackageInfo>): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<OtaUpdateTableConfigResolve, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<OtaUpdateTableConfigResolve>;
}
