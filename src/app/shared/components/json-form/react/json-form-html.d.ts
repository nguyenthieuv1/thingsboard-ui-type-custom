import * as React from 'react';
import { JsonFormFieldProps, JsonFormFieldState } from '@shared/components/json-form/react/json-form.models';
import { Observable } from 'rxjs/internal/Observable';
declare class ThingsboardHtml extends React.Component<JsonFormFieldProps, JsonFormFieldState> {
    constructor(props: any);
    onTidyHtml(html: string): Observable<string>;
    render(): JSX.Element;
}
export default ThingsboardHtml;
