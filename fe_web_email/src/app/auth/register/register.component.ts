import { Component, OnInit } from '@angular/core';
import { FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';

import { AuthService, User } from 'src/app/core/auth-api.service';
import { FormFields, MatInputTypes } from 'src/app/shared/dynamic-form-field/dynamic-form-field.interface';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  formFields: Array<FormFields> = [
    {
      formControlName: 'username',
      label: 'Username'
    },
    {
      formControlName: 'email',
      label: 'Email'
    },
    {
      type: MatInputTypes.PASSWORD,
      formControlName: 'password',
      label: 'Password'
    }
  ];

  constructor(private authService: AuthService, private formBuilder: NonNullableFormBuilder) {
    this.registerForm = this.formBuilder.group<any>({
      username: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  ngOnInit(): void {

  }

  createAccount(): void {
   // this.authService.createUser(this.registerForm.value).subscribe();
  }

}
