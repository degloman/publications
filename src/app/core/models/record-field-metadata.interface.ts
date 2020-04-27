import { RecordFieldType } from './record-field-type.enum';

export interface RecordFieldMetadata {
  id: number;
  name: string;
  type: RecordFieldType;
  fieldId: number;
  fieldCode: string;
  placeholderTxt: string;
  isReadOnly: boolean;
  isHidden: boolean;
  priority: number;
  isMandatory: boolean;
}
