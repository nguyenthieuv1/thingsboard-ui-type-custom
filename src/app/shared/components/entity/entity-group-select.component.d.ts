import { OnInit } from '@angular/core';
import { EntityType } from "@shared/models/entity-type.models";
import { BaseData, HasId } from "@shared/models/base-data";
import { ControlValueAccessor, UntypedFormBuilder, UntypedFormGroup } from "@angular/forms";
export declare class EntityGroupSelectComponent implements ControlValueAccessor, OnInit {
    fb: UntypedFormBuilder;
    protected readonly EntityType: any;
    entityGroupSelectForm: UntypedFormGroup;
    owner: BaseData<HasId>;
    childGroupAutocomplete: any;
    protected propagateChange: (v: any) => void;
    isContainGroupOwner: boolean;
    isContainEntityGroupAll: boolean;
    modelValue: {
        entityType: any;
        owner: any;
        entityGroup: any;
    };
    constructor(fb: UntypedFormBuilder);
    ngOnInit(): void;
    ownerChange(owner: BaseData<HasId>): void;
    isEntityTypeSelected(): any;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    writeValue(obj: any): void;
    updateView(entityType: EntityType | null, owner: string, entityGroup: string | null): void;
    getAllowedEntityType(): Array<EntityType> | null;
}
