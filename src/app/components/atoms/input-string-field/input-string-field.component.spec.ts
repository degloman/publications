import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputStringFieldComponent } from './input-string-field.component';

describe('InputStringFieldComponent', () => {
  let component: InputStringFieldComponent;
  let fixture: ComponentFixture<InputStringFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputStringFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputStringFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
