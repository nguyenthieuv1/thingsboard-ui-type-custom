import { ChangeDetectorRef, OnDestroy, OnInit } from '@angular/core';
import { PageComponent } from '@shared/components/page.component';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { DocumentationLinks } from '@shared/models/user-settings.models';
import { UserSettingsService } from '@core/http/user-settings.service';
import { WidgetContext } from '@home/models/widget-component.models';
import { MatDialog } from '@angular/material/dialog';
import { BreakpointObserver } from '@angular/cdk/layout';
import * as i0 from "@angular/core";
interface DocLinksWidgetSettings {
    columns: number;
}
export declare class DocLinksWidgetComponent extends PageComponent implements OnInit, OnDestroy {
    protected store: Store<AppState>;
    private cd;
    private userSettingsService;
    private dialog;
    private breakpointObserver;
    ctx: WidgetContext;
    settings: DocLinksWidgetSettings;
    columns: number;
    rowHeight: string;
    gutterSize: string;
    documentationLinks: DocumentationLinks;
    authUser: import("../../../../../../shared/public-api").AuthUser;
    private observeBreakpointSubscription;
    constructor(store: Store<AppState>, cd: ChangeDetectorRef, userSettingsService: UserSettingsService, dialog: MatDialog, breakpointObserver: BreakpointObserver);
    ngOnInit(): void;
    ngOnDestroy(): void;
    private loadDocLinks;
    edit(): void;
    addLink(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DocLinksWidgetComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DocLinksWidgetComponent, "tb-doc-links-widget", never, { "ctx": "ctx"; }, {}, never, never, false, never>;
}
export {};
