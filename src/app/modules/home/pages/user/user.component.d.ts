import { ChangeDetectorRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { EntityComponent } from '../../components/entity/entity.component';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { User } from '@shared/models/user.model';
import { Authority } from '@shared/models/authority.enum';
import { EntityTableConfig } from '@home/models/entity/entities-table-config.models';
import { TranslateService } from '@ngx-translate/core';
import * as i0 from "@angular/core";
export declare class UserComponent extends EntityComponent<User> {
    protected store: Store<AppState>;
    protected entityValue: User;
    protected entitiesTableConfigValue: EntityTableConfig<User>;
    fb: UntypedFormBuilder;
    protected cd: ChangeDetectorRef;
    protected translate: TranslateService;
    authority: typeof Authority;
    loginAsUserEnabled$: import("rxjs").Observable<boolean>;
    constructor(store: Store<AppState>, entityValue: User, entitiesTableConfigValue: EntityTableConfig<User>, fb: UntypedFormBuilder, cd: ChangeDetectorRef, translate: TranslateService);
    hideDelete(): boolean;
    isUserCredentialsEnabled(): boolean;
    isUserCredentialPresent(): boolean;
    buildForm(entity: User): UntypedFormGroup;
    updateForm(entity: User): void;
    onUserIdCopied($event: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<UserComponent, [null, { optional: true; }, { optional: true; }, null, null, null]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<UserComponent, "tb-user", never, {}, {}, never, never, false, never>;
}
