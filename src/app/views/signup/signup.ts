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
} from '../../shared/models/models';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterModule } from '@angular/router';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { AuthService } from '../../core/services/auth/auth-service';
import { HttpErrorResponse } from '@angular/common/http';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ToastType } from '../../shared/models/toast.model';
import { Toast } from '../../shared/components/toast/toast';
import { UserService } from '../../core/services/users/user-service';

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
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  templateUrl: './signup.html',
  styleUrl: './signup.scss',
})
export class Signup {
  private snackBar = inject(MatSnackBar);
  private fb = inject(NonNullableFormBuilder);
  private authService = inject(AuthService);
  private userService = inject(UserService);
  private router = inject(Router);

  signupForm: FormGroup<SignUpFormModel>;

  constructor() {
    this.signupForm = this.fb.group<SignUpFormModel>({
      firstName: this.fb.control<string>('', [Validators.required]),
      lastName: this.fb.control<string>('', [Validators.required]),
      birthdate: this.fb.control<string>('', [Validators.required]),
      email: this.fb.control<string>('', [
        Validators.required,
        Validators.email,
      ]),
      password: this.fb.control<string>('', [Validators.required]),
    });
  }

  onSubmit() {
    if (this.signupForm.invalid) {
      this.snackBar.openFromComponent(Toast, {
        data: {
          message: 'Revisa todos los campos obligatorios',
          type: ToastType.WARNING,
        },
      });
      return;
    }

    this.userService.signup(this.signupForm.value as SignUpRequest).subscribe({
      next: () => {
        this.snackBar.openFromComponent(Toast, {
          data: {
            message: 'Usuario registrado exitosamente',
            type: ToastType.SUCCESS,
          },
        });
        this.router.navigate(['login']);
      },
      error: (err: HttpErrorResponse) => {
        const error = err.error as ServerErrorResponse;
        this.snackBar.openFromComponent(Toast, {
          data: { message: error.message, type: ToastType.ERROR },
        });
      },
    });
  }
}
