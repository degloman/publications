import { Component, OnInit, Input } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
  ValidatorFn,
} from '@angular/forms';
import { AdminApiService } from 'src/core/services/admin-api.service';
import { RecordField } from 'src/core/models/record-field.interface';
import { Record } from 'src/core/models/record.model';
import { RecordFieldType } from 'src/core/models/record-field-type.enum';
import { RecordResponse } from 'src/core/models/record-response.interface';

@Component({
  selector: 'app-admin-publication-edit',
  templateUrl: './admin-publication-edit.component.html',
  styleUrls: ['./admin-publication-edit.component.scss'],
})
export class AdminPublicationEditComponent implements OnInit {
  @Input() publicationID: number;
  public error: string;
  public formValues: object = null;
  public fieldPrefix = 'field';
  public dynamicForm: FormGroup = this.formBuilder.group({});
  public RecordFieldType: typeof RecordFieldType = RecordFieldType;
  public record: Record;

  constructor(
    private apiAdminService: AdminApiService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.apiAdminService.getPublicationEdit(this.publicationID).subscribe(
      (res) => {
        this.record = res;
        this.initFormGroup(res.fields);
      },
      (err) => {
        this.error = err;
      }
    );
  }

  private initFormGroup(recordFields: RecordField[]) {
    if (recordFields && recordFields.length > 0) {
      for (const recordField of recordFields) {
        if (recordField.type === RecordFieldType.datatime) {
          recordField.value = new Date(recordField.value);
        }
        let newControl = new FormControl(
          { value: recordField.value, disabled: recordField.isReadOnly },
          this.generateValiadators(recordField)
        );
        this.dynamicForm.addControl(
          this.fieldPrefix + recordField.fieldId,
          newControl
        );
      }
    }
  }

  private generateValiadators(recordField: RecordField): ValidatorFn[] {
    let validators: ValidatorFn[] = [];
    if (recordField.isMandatory) {
      validators.push(Validators.required);
    }
    return validators;
  }

  public onSubmit(event) {
    event.preventDefault();
    event.stopPropagation();
    if (this.dynamicForm.valid) {
      this.formValues = this.mapFieldsForSaving(this.dynamicForm.value);
    } else {
      this.validateAllFormFields(this.dynamicForm);
    }
  }

  private validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach((field) => {
      const control = formGroup.get(field);
      control.markAsTouched({ onlySelf: true });
    });
  }

  private mapFieldsForSaving(formValues: object): RecordResponse {
    let recordResponse: RecordResponse = {
      id: this.record.id,
      code: this.record.code,
      data: [],
    };

    let fields = this.record.fields;
    for (const field of fields) {
      const fieldId = field.fieldId;
      let value = formValues[this.fieldPrefix + field.fieldId];
      if (field.type === RecordFieldType.datatime) {
        value = (value as Date).toISOString();
      }
      recordResponse.data.push({
        fieldId,
        value,
      });
    }
    return recordResponse;
  }

  get fields(): RecordField[] {
    return this.record && this.record.fields ? this.record.fields : [];
  }
}
