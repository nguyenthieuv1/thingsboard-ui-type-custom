import { PageComponent } from '@shared/components/page.component';
import { EventEmitter, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { UntypedFormControl } from '@angular/forms';
import { TbPopoverComponent } from '@shared/components/popover.component';
import * as i0 from "@angular/core";
export declare class ColorPickerPanelComponent extends PageComponent implements OnInit {
    protected store: Store<AppState>;
    color: string;
    colorClearButton: boolean;
    popover: TbPopoverComponent<ColorPickerPanelComponent>;
    colorSelected: EventEmitter<string>;
    colorPickerControl: UntypedFormControl;
    constructor(store: Store<AppState>);
    ngOnInit(): void;
    selectColor(): void;
    clearColor(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ColorPickerPanelComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ColorPickerPanelComponent, "tb-color-picker-panel", never, { "color": "color"; "colorClearButton": "colorClearButton"; "popover": "popover"; }, { "colorSelected": "colorSelected"; }, never, never, false, never>;
}
