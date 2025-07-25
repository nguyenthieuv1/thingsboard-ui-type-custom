import { BackgroundSettings, ColorSettings, Font } from '@shared/models/widget-settings.models';
export declare enum BatteryLevelLayout {
    vertical_solid = "vertical_solid",
    horizontal_solid = "horizontal_solid",
    vertical_divided = "vertical_divided",
    horizontal_divided = "horizontal_divided"
}
export declare const batteryLevelLayouts: BatteryLevelLayout[];
export declare const batteryLevelLayoutTranslations: Map<BatteryLevelLayout, string>;
export declare const batteryLevelLayoutImages: Map<BatteryLevelLayout, string>;
export interface BatteryLevelWidgetSettings {
    layout: BatteryLevelLayout;
    showValue: boolean;
    autoScaleValueSize: boolean;
    valueFont: Font;
    valueColor: ColorSettings;
    batteryLevelColor: ColorSettings;
    batteryShapeColor: ColorSettings;
    background: BackgroundSettings;
}
export declare const batteryLevelDefaultSettings: BatteryLevelWidgetSettings;
