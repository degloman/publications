import { RecordFieldMetadata } from '../models/record-field-metadata.interface';
import { RecordFieldValue } from '../models/record-field-value.interface';
import { RecordField } from '../models/record-field.interface';
import { RecordResponse } from '../models/record-response.interface';
import { Record } from '../models/record.model';

export const mapPublicationsResponse = (
  recordsResponse: RecordResponse[],
  metadata: RecordFieldMetadata[]
): Record[] => {
  let records: Record[] = [];
  if (
    recordsResponse &&
    recordsResponse.length > 0 &&
    metadata &&
    metadata.length > 0 &&
    metadata.length === recordsResponse.length
  ) {
    for (let recordResponse of recordsResponse) {
      records.push(mapRecord(recordResponse, metadata));
    }
  }
  return records;
};

export const mapPublicationEditResponse = (
  recordResponse: RecordResponse,
  metadata: RecordFieldMetadata[]
): Record => {
  return mapRecord(recordResponse, metadata);
};

const mapRecord = (
  recordResponse: RecordResponse,
  metadata: RecordFieldMetadata[]
): Record => {
  let _record = recordResponse;
  let recordValueFields: RecordFieldValue[] = _record.data;
  let recordFields: RecordField[] = [];

  for (const recordValueField of recordValueFields) {
    const recordField = Object.assign(
      {},
      recordValueField,
      metadata.find((fmdata) => fmdata.fieldId === recordValueField.fieldId)
    );
    if (!recordField.isHidden) {
      recordFields.push(recordField);
    }
  }
  recordFields.sort((a, b) => a.priority - b.priority);
  return {
    id: _record.id,
    code: _record.code,
    fields: recordFields,
  };
};
