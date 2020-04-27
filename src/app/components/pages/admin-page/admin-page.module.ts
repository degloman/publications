import { NgModule } from '@angular/core';
import { AdminContentComponent } from '../../templates/admin/admin-content/admin-content.component';
import { AdminHeaderComponent } from '../../templates/admin/admin-header/admin-header.component';
import { AdminLeftSidebarComponent } from '../../templates/admin/admin-left-sidebar/admin-left-sidebar.component';
import { AdminPageComponent } from './admin-page.component';
import { RouterModule } from '@angular/router';
import { adminRoutes } from './admin-page.routes';
import { AdminApiService } from 'src/app/core/services/admin-api.service';
import { AdminRecordFieldTableComponent } from '../../molecules/admin-record-field-table/admin-record-field-table.component';
import { CommonModule } from '@angular/common';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { AdminPublicationEditComponent } from '../../organisms/admin-publication-edit/admin-publication-edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InputStringFieldComponent } from '../../atoms/input-string-field/input-string-field.component';
import { InputTextFieldComponent } from '../../atoms/input-text-field/input-text-field.component';
import { DatetimeFieldComponent } from '../../atoms/datetime-field/datetime-field.component';
import { DynamicFieldDirective } from 'src/app/core/directive/dynamic-field.directive';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AdminPublicationEditModalEntryComponent } from '../../organisms/admin-publication-edit-modal-entry/admin-publication-edit-modal-entry.component';
import { LoggedInGuard } from 'src/app/app-logged-in.guard';
@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(adminRoutes),
    BsDatepickerModule.forRoot(),
    ModalModule.forRoot(),
  ],
  declarations: [
    AdminPageComponent,
    AdminHeaderComponent,
    AdminLeftSidebarComponent,
    AdminContentComponent,
    AdminRecordFieldTableComponent,
    AdminPublicationEditComponent,
    InputStringFieldComponent,
    InputTextFieldComponent,
    DatetimeFieldComponent,
    DynamicFieldDirective,
    AdminPublicationEditModalEntryComponent,
  ],
  providers: [AdminApiService],
  exports: [AdminPageComponent],
  entryComponents: [
    InputTextFieldComponent,
    InputStringFieldComponent,
    DatetimeFieldComponent,
  ],
})
export class AdminPageModule {}
