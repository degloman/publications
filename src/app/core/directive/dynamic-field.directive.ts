import {
  ComponentFactoryResolver,
  ComponentRef,
  Directive,
  Input,
  OnInit,
  ViewContainerRef,
  OnDestroy,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { InputTextFieldComponent } from 'src/app/components/atoms/input-text-field/input-text-field.component';
import { InputStringFieldComponent } from 'src/app/components/atoms/input-string-field/input-string-field.component';
import { DatetimeFieldComponent } from 'src/app/components/atoms/datetime-field/datetime-field.component';
import { RecordFieldType } from '../models/record-field-type.enum';
import { RecordField } from '../models/record-field.interface';

@Directive({
  selector: '[dynamicField]',
})
export class DynamicFieldDirective implements OnInit, OnDestroy {
  @Input() field: RecordField;
  @Input() formGroup: FormGroup;
  @Input() frmCtrlName: string;
  private componentMapper = {
    [RecordFieldType.text]: InputTextFieldComponent,
    [RecordFieldType.string]: InputStringFieldComponent,
    [RecordFieldType.datatime]: DatetimeFieldComponent,
  };
  componentRef: any;
  constructor(
    private resolver: ComponentFactoryResolver,
    private container: ViewContainerRef
  ) {}
  ngOnInit() {
    const factory = this.resolver.resolveComponentFactory(
      this.componentMapper[this.field.type]
    );
    this.componentRef = this.container.createComponent(factory);
    this.componentRef.instance.field = this.field;
    this.componentRef.instance.formGroup = this.formGroup;
    this.componentRef.instance.formControlName = this.frmCtrlName;
  }
  ngOnDestroy() {
    this.componentRef.destroy();
  }
}
