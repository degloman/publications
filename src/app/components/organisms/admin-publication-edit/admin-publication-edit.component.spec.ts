import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPublicationEditComponent } from './admin-publication-edit.component';

describe('AdminPublicationEditComponent', () => {
  let component: AdminPublicationEditComponent;
  let fixture: ComponentFixture<AdminPublicationEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPublicationEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPublicationEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
