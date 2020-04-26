import { Routes, Route } from '@angular/router';
import { AdminPageComponent } from './admin-page.component';
import { AdminPublicationEditModalEntryComponent } from '../../organisms/admin-publication-edit-modal-entry/admin-publication-edit-modal-entry.component';

export const adminRoutes: Routes = [
  {
    path: '',
    component: AdminPageComponent,
    children: [
      {
        path: 'publication/:id',
        component: AdminPublicationEditModalEntryComponent,
      },
    ],
  },
];
