import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { DynamicFormFieldComponent } from './dynamic-form-field/dynamic-form-field.component';
import { ControlErrorsDirective } from './directives/control-errors.directive';
import { FormSubmitDirective } from './directives/form-submit.directive';

const moduleDirectives = [
    ControlErrorsDirective,
    FormSubmitDirective
]

const moduleComponents = [
    DynamicFormFieldComponent
]

const materialModules = [
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule
]

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        ...materialModules
    ],
    exports: [
        CommonModule,
        ReactiveFormsModule,
        ...moduleComponents,
        ...moduleDirectives,
        ...materialModules
    ],
    declarations: [
        ...moduleComponents,
        ...moduleDirectives
    ]
})
export class SharedModule { }
