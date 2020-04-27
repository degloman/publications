import { Component, Input, Output, EventEmitter } from '@angular/core';
import { RecordFieldType } from 'src/app/core/models/record-field-type.enum';
import { Record } from 'src/app/core/models/record.model';
import { RecordField } from 'src/app/core/models/record-field.interface';
@Component({
  selector: 'app-admin-record-field-table',
  templateUrl: './admin-record-field-table.component.html',
  styleUrls: ['./admin-record-field-table.component.scss'],
})
export class AdminRecordFieldTableComponent {
  @Input() data: Record[];
  @Output() selected: EventEmitter<number> = new EventEmitter<number>();
  public RecordFieldType: typeof RecordFieldType = RecordFieldType;
  constructor() {}

  get headers() {
    return this.getHeaders(this.data[0].fields);
  }

  private getHeaders(recordField: RecordField[]): string[] {
    return recordField.map(({ name }) => name);
  }
  public clickHandler(publicationID) {
    this.selected.emit(publicationID);
  }
}
