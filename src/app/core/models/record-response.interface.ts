import { RecordCode } from './record-code.enum';
import { RecordFieldValue } from './record-field-value.interface';

export interface RecordResponse {
  id: number;
  code: RecordCode;
  data: RecordFieldValue[];
}
