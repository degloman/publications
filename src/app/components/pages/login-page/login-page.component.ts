import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { validateAllFormFields } from 'src/app/core/helpers/formValidatior';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  authError: string = null;
  loginForm: FormGroup;
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      if (this.authService.login(this.values.email, this.values.password)) {
        this.router.navigate(['admin']);
      } else {
        this.authError = 'Wrong credentials';
      }
    } else {
      validateAllFormFields(this.loginForm);
    }
  }

  get values() {
    return this.loginForm.value;
  }
}
