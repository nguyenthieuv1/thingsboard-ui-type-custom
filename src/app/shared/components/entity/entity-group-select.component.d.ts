import { OnInit } from '@angular/core';
import { EntityType } from "@shared/models/entity-type.models";
import { BaseData, HasId } from "@shared/models/base-data";
import { ControlValueAccessor, UntypedFormBuilder, UntypedFormGroup } from "@angular/forms";
import { AutocompleteEntityGroupComponent } from "@shared/components/bkav/autocomplete-entity-group.component";
import * as i0 from "@angular/core";

export declare class EntityGroupSelectComponent implements ControlValueAccessor, OnInit {
    fb: UntypedFormBuilder;
    protected readonly EntityType: typeof EntityType;
    entityGroupSelectForm: UntypedFormGroup;
    owner: BaseData<HasId>;
    childGroupAutocomplete: AutocompleteEntityGroupComponent;
    protected propagateChange: (v: any) => void;
    
    /** Có bao gồm group owner hay không */
    isContainGroupOwner: boolean;

    /** Có bao gồm entity group "All" hay không */
    isContainEntityGroupAll: boolean;

    /** Giá trị hiện tại của form */
    modelValue: {
        entityType: EntityType | null;
        owner: string | null;
        entityGroup: string | null;
    };

    constructor(fb: UntypedFormBuilder);

    ngOnInit(): void;

    ownerChange(owner: BaseData<HasId>): void;

    isEntityTypeSelected(): boolean;

    registerOnChange(fn: any): void;

    registerOnTouched(fn: any): void;

    writeValue(obj: any): void;

    updateView(entityType: EntityType | null, owner: string | null, entityGroup: string | null): void;

    getAllowedEntityType(): Array<EntityType> | null;

    static ɵfac: i0.ɵɵFactoryDeclaration<EntityGroupSelectComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EntityGroupSelectComponent,
        "tb-entity-group-select",
        never,
        {
            "isContainGroupOwner": "isContainGroupOwner";
            "isContainEntityGroupAll": "isContainEntityGroupAll";
        },
        {},
        never,
        never
    >;
}
