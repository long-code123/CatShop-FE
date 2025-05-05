import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

import { CustomerService } from 'src/app/services/human/customer.service';
import { LoginRequest } from './login.model';

@Component({
  selector: 'app-login',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  public loginForm!: UntypedFormGroup;
  public submitted = false;

  constructor(
    private readonly formBuilder: UntypedFormBuilder,
    private readonly router: Router,
    private readonly customerService: CustomerService
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {}

  get f() {
    return this.loginForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (!this.loginForm.invalid) {
      const loginRequest: LoginRequest = {
        email: this.f['email'].value,
        password: this.f['password'].value,
      };

      this.customerService.login(loginRequest).then(
        (res) => {
          console.log(res);
          this.router.navigate(['/']);
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }
}
