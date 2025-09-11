import { Component, inject } from '@angular/core';
import {
  FormGroup,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { LoginFormModel, UserLoginRequest } from '../../shared/models/models';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterModule } from '@angular/router';
import { ToastService } from '../../shared/services/toast-service';
import { AuthService } from '../../core/services/auth/auth-service';

@Component({
  selector: 'app-login',
  imports: [
    MatCardModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    RouterModule,
  ],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  private fb = inject(NonNullableFormBuilder);
  private toastService = inject(ToastService);
  private authService = inject(AuthService);
  private router = inject(Router);

  loginForm: FormGroup<LoginFormModel>;

  constructor() {
    this.loginForm = this.fb.group<LoginFormModel>({
      email: this.fb.control<string>('', [
        Validators.required,
        Validators.email,
      ]),
      password: this.fb.control<string>('', [Validators.required]),
    });
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      this.toastService.info('Porfavor llenar todos los campos obligatorios.');
      return;
    }

    const formData = this.loginForm.value as UserLoginRequest;

    this.authService.login(formData).subscribe({
      next: (res) => {
        this.authService.storeToken(res.access_token);
        this.router.navigate(['/home']);
      },
      error: (err) => {
        this.toastService.error(
          err?.error?.message || 'Error al iniciar sesion, intenta de nuevo.',
        );
      },
    });
  }
}
