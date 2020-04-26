import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputTextFieldComponent } from './input-text-field.component';

describe('InputTextFieldComponent', () => {
  let component: InputTextFieldComponent;
  let fixture: ComponentFixture<InputTextFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputTextFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputTextFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
