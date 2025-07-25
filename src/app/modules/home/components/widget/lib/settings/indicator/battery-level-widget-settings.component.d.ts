import { Injector } from '@angular/core';
import { WidgetSettings, WidgetSettingsComponent } from '@shared/models/widget.models';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import * as i0 from "@angular/core";
export declare class BatteryLevelWidgetSettingsComponent extends WidgetSettingsComponent {
    protected store: Store<AppState>;
    private $injector;
    private fb;
    batteryLevelLayouts: import("@home/components/widget/lib/indicator/battery-level-widget.models").BatteryLevelLayout[];
    batteryLevelLayoutTranslationMap: Map<import("@home/components/widget/lib/indicator/battery-level-widget.models").BatteryLevelLayout, string>;
    batteryLevelLayoutImageMap: Map<import("@home/components/widget/lib/indicator/battery-level-widget.models").BatteryLevelLayout, string>;
    batteryLevelWidgetSettingsForm: UntypedFormGroup;
    valuePreviewFn: any;
    constructor(store: Store<AppState>, $injector: Injector, fb: UntypedFormBuilder);
    protected settingsForm(): UntypedFormGroup;
    protected defaultSettings(): WidgetSettings;
    protected onSettingsSet(settings: WidgetSettings): void;
    protected validatorTriggers(): string[];
    protected updateValidators(emitEvent: boolean): void;
    private _valuePreviewFn;
    static ɵfac: i0.ɵɵFactoryDeclaration<BatteryLevelWidgetSettingsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BatteryLevelWidgetSettingsComponent, "tb-battery-level-widget-settings", never, {}, {}, never, never, false, never>;
}
