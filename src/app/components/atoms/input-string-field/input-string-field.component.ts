import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { RecordField } from 'src/core/models/record-field.interface';

@Component({
  selector: 'app-input-string-field',
  templateUrl: './input-string-field.component.html',
  styleUrls: ['./input-string-field.component.scss'],
})
export class InputStringFieldComponent implements OnInit {
  field: RecordField;
  formGroup: FormGroup;
  formControlName: string;
  constructor() {}
  ngOnInit() {}
}
