import { RequestConfig } from './http-utils';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { PageLink } from '@shared/models/page/page-link';
import { PageData } from '@shared/models/page/page-data';
import { WidgetsBundle } from '@shared/models/widgets-bundle.model';
import { WidgetType, widgetType, WidgetTypeDetails, WidgetTypeInfo } from '@shared/models/widget.models';
import { TranslateService } from '@ngx-translate/core';
import { WidgetInfo } from '@app/modules/home/models/widget-component.models';
import { WidgetTypeId } from '@shared/models/id/widget-type-id';
import { Router } from '@angular/router';
import * as i0 from "@angular/core";
export declare class WidgetService {
    private http;
    private translate;
    private router;
    private allWidgetsBundles;
    private systemWidgetsBundles;
    private tenantWidgetsBundles;
    private widgetTypeInfosCache;
    private widgetsInfoInMemoryCache;
    private loadWidgetsBundleCacheSubject;
    constructor(http: HttpClient, translate: TranslateService, router: Router);
    getWidgetScopeVariables(): string[];
    getAllWidgetsBundles(config?: RequestConfig): Observable<Array<WidgetsBundle>>;
    getSystemWidgetsBundles(config?: RequestConfig): Observable<Array<WidgetsBundle>>;
    getTenantWidgetsBundles(config?: RequestConfig): Observable<Array<WidgetsBundle>>;
    getWidgetBundles(pageLink: PageLink, config?: RequestConfig): Observable<PageData<WidgetsBundle>>;
    getWidgetsBundle(widgetsBundleId: string, config?: RequestConfig): Observable<WidgetsBundle>;
    saveWidgetsBundle(widgetsBundle: WidgetsBundle, config?: RequestConfig): Observable<WidgetsBundle>;
    updateWidgetsBundleWidgetTypes(widgetsBundleId: string, widgetTypeIds: Array<string>, config?: RequestConfig): Observable<void>;
    updateWidgetsBundleWidgetFqns(widgetsBundleId: string, widgetTypeFqns: Array<string>, config?: RequestConfig): Observable<void>;
    deleteWidgetsBundle(widgetsBundleId: string, config?: RequestConfig): Observable<Object>;
    getBundleWidgetTypes(widgetsBundleId: string, config?: RequestConfig): Observable<Array<WidgetType>>;
    getBundleWidgetTypesDetails(widgetsBundleId: string, config?: RequestConfig): Observable<Array<WidgetTypeDetails>>;
    getBundleWidgetTypeFqns(widgetsBundleId: string, config?: RequestConfig): Observable<Array<string>>;
    getBundleWidgetTypeInfos(widgetsBundleId: string, config?: RequestConfig): Observable<Array<WidgetTypeInfo>>;
    getWidgetType(fullFqn: string, config?: RequestConfig): Observable<WidgetType>;
    saveWidgetTypeDetails(widgetInfo: WidgetInfo, id: WidgetTypeId, createdTime: number, config?: RequestConfig): Observable<WidgetTypeDetails>;
    saveImportedWidgetTypeDetails(widgetTypeDetails: WidgetTypeDetails, config?: RequestConfig): Observable<WidgetTypeDetails>;
    getWidgetTypeById(widgetTypeId: string, config?: RequestConfig): Observable<WidgetTypeDetails>;
    getWidgetTypeInfoById(widgetTypeId: string, config?: RequestConfig): Observable<WidgetTypeInfo>;
    saveWidgetType(widgetTypeDetails: WidgetTypeDetails, config?: RequestConfig): Observable<WidgetTypeDetails>;
    deleteWidgetType(widgetTypeId: string, config?: RequestConfig): Observable<Object>;
    getWidgetTypes(pageLink: PageLink, tenantOnly?: boolean, fullSearch?: boolean, config?: RequestConfig): Observable<PageData<WidgetTypeInfo>>;
    getWidgetTemplate(widgetTypeParam: widgetType, config?: RequestConfig): Observable<WidgetInfo>;
    getWidgetInfoFromCache(fullFqn: string): WidgetInfo | undefined;
    putWidgetInfoToCache(widgetInfo: WidgetInfo): void;
    private widgetTypeUpdated;
    deleteWidgetInfoFromCache(fullFqn: string): void;
    private loadWidgetsBundleCache;
    private invalidateWidgetsBundleCache;
    static ɵfac: i0.ɵɵFactoryDeclaration<WidgetService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<WidgetService>;
}
