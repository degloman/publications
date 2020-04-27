import { RecordFieldValue } from './record-field-value.interface';
import { RecordFieldMetadata } from './record-field-metadata.interface';

export interface RecordField extends RecordFieldValue, RecordFieldMetadata {}
