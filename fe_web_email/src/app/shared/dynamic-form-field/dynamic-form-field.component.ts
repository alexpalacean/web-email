import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FormFields } from './dynamic-form-field.interface';

@Component({
  selector: 'app-dynamic-form-field',
  templateUrl: './dynamic-form-field.component.html',
  styleUrls: ['./dynamic-form-field.component.scss']
})
export class DynamicFormFieldComponent implements OnInit {
  @Input() formFields: Array<FormFields>;
  @Input() formGroup: FormGroup;
  
  constructor() { }

  ngOnInit(): void {
  }

}
