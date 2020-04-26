import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRecordFieldTableComponent } from './admin-record-field-table.component';

describe('AdminRecordFieldTableComponent', () => {
  let component: AdminRecordFieldTableComponent;
  let fixture: ComponentFixture<AdminRecordFieldTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminRecordFieldTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRecordFieldTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
