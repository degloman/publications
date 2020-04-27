import { Routes, Route } from '@angular/router';
import { AdminPageComponent } from './admin-page.component';
import { AdminPublicationEditModalEntryComponent } from '../../organisms/admin-publication-edit-modal-entry/admin-publication-edit-modal-entry.component';
import { LoggedInGuard } from 'src/app/app-logged-in.guard';

export const adminRoutes: Routes = [
  {
    path: '',
    component: AdminPageComponent,
    canActivate: [LoggedInGuard],
    children: [
      {
        path: 'publication/:id',
        component: AdminPublicationEditModalEntryComponent,
      },
    ],
  },
  {
    path: '**',
    component: AdminPageComponent,
    canActivate: [LoggedInGuard],
  },
];
