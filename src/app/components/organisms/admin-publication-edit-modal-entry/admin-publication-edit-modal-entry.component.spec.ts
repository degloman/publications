import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPublicationEditModalEntryComponent } from './admin-publication-edit-modal-entry.component';

describe('AdminPublicationEditModalEntryComponent', () => {
  let component: AdminPublicationEditModalEntryComponent;
  let fixture: ComponentFixture<AdminPublicationEditModalEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPublicationEditModalEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPublicationEditModalEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
