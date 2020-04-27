import { Component, OnInit } from '@angular/core';
import { RecordField } from 'src/app/core/models/record-field.interface';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input-text-field',
  templateUrl: './input-text-field.component.html',
  styleUrls: ['./input-text-field.component.scss'],
})
export class InputTextFieldComponent implements OnInit {
  field: RecordField;
  formGroup: FormGroup;
  formControlName: string;
  constructor() {}

  ngOnInit(): void {}
}
