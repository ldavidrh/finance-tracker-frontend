import { Component, inject } from '@angular/core';
import { MatCard, MatCardModule } from '@angular/material/card';
import { MatCardHeader } from '@angular/material/card';
import {
  FormGroup,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  ServerErrorResponse,
  SignUpFormModel,
  SignUpRequest,
} from '../../shared/models';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterModule } from '@angular/router';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { AuthService } from '../../core/services/auth/auth-service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  imports: [
    MatCardModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    RouterModule,
    MatSnackBarModule,
  ],
  templateUrl: './signup.html',
  styleUrl: './signup.scss',
})
export class Signup {
  private snackBar = inject(MatSnackBar);
  private fb = inject(NonNullableFormBuilder);
  private authService = inject(AuthService);
  private router = inject(Router);

  signupForm: FormGroup<SignUpFormModel>;

  constructor() {
    this.signupForm = this.fb.group<SignUpFormModel>({
      firstName: this.fb.control<string>('', [Validators.required]),
      lastName: this.fb.control<string>('', [Validators.required]),
      email: this.fb.control<string>('', [
        Validators.required,
        Validators.email,
      ]),
      password: this.fb.control<string>('', [Validators.required]),
    });
  }

  onSubmit() {
    if (this.signupForm.invalid) {
      this.snackBar.open('Completar los campos del formulario');
      return;
    }

    this.authService.signup(this.signupForm.value as SignUpRequest).subscribe({
      next: () => {
        //debemos redirigir al screen de confirmación de email
        this.router.navigate(['register']);
      },
      error: (err: HttpErrorResponse) => {
        const error = err.error as ServerErrorResponse;
        console.log(err.message);
      },
    });
  }
}
