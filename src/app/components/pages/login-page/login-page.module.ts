import { NgModule } from '@angular/core';
import { LoginPageComponent } from './login-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [LoginPageComponent],
  exports: [LoginPageComponent],
  entryComponents: [LoginPageComponent],
})
export class LoginPageModule {}
