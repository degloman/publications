import { of } from 'rxjs';

export const PUBLICATIONS_METADATA = of([
  {
    id: 1157,
    name: 'Displayed name',
    type: 'string',
    fieldId: 2,
    fieldCode: 'DisplayedName',
    placeholderTxt: 'Write displayed name',
    isReadOnly: false,
    isHidden: false,
    priority: 1,
    isMandatory: false,
  },
  {
    id: 1158,
    name: 'Headline',
    type: 'string',
    fieldId: 3,
    fieldCode: 'Headline',
    placeholderTxt: 'Write headline',
    isReadOnly: false,
    isHidden: false,
    priority: 2,
    isMandatory: false,
  },
  {
    id: 1160,
    name: 'Last Modified Date',
    type: 'datatime',
    fieldId: 15,
    fieldCode: 'LastModifiedDate',
    placeholderTxt: 'Write last modified date',
    isReadOnly: false,
    isHidden: false,
    priority: 3,
    isMandatory: false,
  },
  {
    id: 1161,
    name: 'Publication Date',
    type: 'datatime',
    fieldId: 16,
    fieldCode: 'PublicationDate',
    placeholderTxt: 'Select date',
    isReadOnly: false,
    isHidden: false,
    priority: 4,
    isMandatory: false,
  },
]);

export const PUBLICATIONS_VALUES = of({
  pagingInfo: {},
  result: [
    {
      id: 18455,
      code: 'Publications',
      data: [
        {
          fieldId: 2,
          value: 'Upside for Emerging Market Equities',
        },
        {
          fieldId: 3,
          value: 'Focus on Domestic Growth',
        },
        {
          fieldId: 15,
          value: '2020-04-16T14:28:45.837Z',
        },
        {
          fieldId: 16,
          value: '2019-09-06T10:02:34.000Z',
        },
      ],
    },
    {
      id: 18480,
      code: 'Publications',
      data: [
        {
          fieldId: 2,
          value: 'Formula E off the track',
        },
        {
          fieldId: 3,
          value: 'Offering the ultimate electric experience',
        },
        {
          fieldId: 15,
          value: '2019-11-21T20:11:23.600Z',
        },
        {
          fieldId: 16,
          value: '2019-11-21T15:49:06.000Z',
        },
      ],
    },
    {
      id: 18493,
      code: 'Publications',
      data: [
        {
          fieldId: 2,
          value: 'Life Sciences',
        },
        {
          fieldId: 3,
          value: 'A Rich Pool of Options',
        },
        {
          fieldId: 15,
          value: '2019-11-21T20:06:16.783Z',
        },
        {
          fieldId: 16,
          value: '2019-11-21T20:03:00.000Z',
        },
      ],
    },
    {
      id: 18481,
      code: 'Publications',
      data: [
        {
          fieldId: 2,
          value: 'Sage Group',
        },
        {
          fieldId: 3,
          value: 'Transition into Cloud',
        },
        {
          fieldId: 15,
          value: '2019-11-21T19:53:22.970Z',
        },
        {
          fieldId: 16,
          value: '2019-11-21T15:50:11.000Z',
        },
      ],
    },
  ],
});

export const PUBLICATIONS_EDIT_VALUES = of([
  {
    id: 18455,
    code: 'Publications',
    data: [
      {
        fieldId: 2,
        value: 'Upside for Emerging Market Equities',
      },
      {
        fieldId: 3,
        value: 'Focus on Domestic Growth',
      },
      {
        fieldId: 4,
        value: '',
      },
      {
        fieldId: 15,
        value: '2020-04-16T14:28:45.837Z',
      },
      {
        fieldId: 16,
        value: '2019-09-06T10:02:34.000Z',
      },
    ],
  },
]);

export const PUBLICATIONS_EDIT_METADATA = of([
  {
    id: 1157,
    name: 'Displayed name',
    type: 'string',
    fieldId: 2,
    fieldCode: 'DisplayedName',
    placeholderTxt: 'Write displayed name',
    isReadOnly: false,
    isHidden: false,
    priority: 1,
    isMandatory: true,
  },
  {
    id: 1158,
    name: 'Headline',
    type: 'string',
    fieldId: 3,
    fieldCode: 'Headline',
    placeholderTxt: 'Write headline',
    isReadOnly: false,
    isHidden: false,
    priority: 2,
    isMandatory: true,
  },
  {
    id: 1156,
    name: 'Comment',
    type: 'text',
    fieldId: 4,
    fieldCode: 'Comment',
    placeholderTxt: 'Write comment',
    isReadOnly: false,
    isHidden: false,
    priority: 3,
    isMandatory: false,
  },
  {
    id: 1160,
    name: 'Last Modified Date',
    type: 'datatime',
    fieldId: 15,
    fieldCode: 'LastModifiedDate',
    placeholderTxt: 'Write last modified date',
    isReadOnly: false,
    isHidden: false,
    priority: 4,
    isMandatory: false,
  },
  {
    id: 1161,
    name: 'Publication Date',
    type: 'datatime',
    fieldId: 16,
    fieldCode: 'PublicationDate',
    placeholderTxt: 'Select date',
    isReadOnly: false,
    isHidden: false,
    priority: 5,
    isMandatory: false,
  },
]);
