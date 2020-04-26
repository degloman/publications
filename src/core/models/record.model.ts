import { RecordCode } from './record-code.enum';
import { RecordField } from './record-field.interface';

export class Record {
  id: number;
  code: RecordCode;
  fields: RecordField[];
}
