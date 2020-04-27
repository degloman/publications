import { Injectable } from '@angular/core';
import { Observable, zip, throwError } from 'rxjs';
import { map, flatMap } from 'rxjs/operators';
import { RecordFieldMetadata } from '../models/record-field-metadata.interface';

import { PublicationValuesResponse } from '../models/publication-values-response.interface';
import {
  PUBLICATIONS_METADATA,
  PUBLICATIONS_VALUES,
  PUBLICATIONS_EDIT_VALUES,
  PUBLICATIONS_EDIT_METADATA,
} from '../mocks/publications';
import {
  mapPublicationsResponse,
  mapPublicationEditResponse,
} from '../helpers/publicationsResponse.mapper';
import { Record } from '../models/record.model';
import { RecordResponse } from '../models/record-response.interface';

@Injectable()
export class AdminApiService {
  getPublicationsMetadata(
    count?: number,
    offset?: number
  ): Observable<RecordFieldMetadata[]> {
    return PUBLICATIONS_METADATA as Observable<RecordFieldMetadata[]>;
  }

  getPublicationsValues(
    count?: number,
    offset?: number
  ): Observable<PublicationValuesResponse> {
    return PUBLICATIONS_VALUES as Observable<PublicationValuesResponse>;
  }

  getPublications(
    count?: number,
    offset?: number,
    dateCreate?: Date,
    dateUpdate?: Date
  ): Observable<Record[]> {
    // here we can add an additional logic, for example for the pagination
    return zip(
      this.getPublicationsValues(),
      this.getPublicationsMetadata()
    ).pipe(
      map((result) => {
        return mapPublicationsResponse(result[0].result, result[1]);
      })
    );
  }

  getPublicationEdit(id: number): Observable<Record> {
    return (PUBLICATIONS_EDIT_VALUES as Observable<RecordResponse[]>).pipe(
      map((values) => values.find((v) => v.id === id)),
      flatMap(
        (recordResponse) => {
          if (recordResponse) {
            let fieldsID = recordResponse.data.map((v) => v.fieldId);
            return this.getPublicationEditMetadata(fieldsID);
          } else {
            return throwError('Unknown publication id in the storage');
          }
        },
        (recordResponse, recordFieldMetadata) => {
          return mapPublicationEditResponse(
            recordResponse,
            recordFieldMetadata
          );
        }
      )
    );
  }

  private getPublicationEditMetadata(
    fieldsID: number[]
  ): Observable<RecordFieldMetadata[]> {
    return (PUBLICATIONS_EDIT_METADATA as Observable<
      RecordFieldMetadata[]
    >).pipe(
      map((mdt) => mdt.filter((v) => fieldsID.some((f) => f === v.fieldId)))
    );
  }
}
