import { Component, OnInit } from '@angular/core';
import { RecordField } from 'src/core/models/record-field.interface';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-datetime-field',
  templateUrl: './datetime-field.component.html',
  styleUrls: ['./datetime-field.component.scss'],
})
export class DatetimeFieldComponent implements OnInit {
  field: RecordField;
  formGroup: FormGroup;
  formControlName: string;
  constructor() {}

  ngOnInit(): void {}
  ngOnChanges(data) {
    console.log(data);
  }
}
