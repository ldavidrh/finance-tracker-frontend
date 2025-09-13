import {
  HttpErrorResponse,
  HttpInterceptorFn,
  HttpStatusCode,
} from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { AuthService } from '../services/auth/auth-service';

export const httpErrorInterceptor: HttpInterceptorFn = (req, next) => {
  const router = inject(Router);
  return next(req).pipe(
    catchError((err: HttpErrorResponse) => {
      if (
        [HttpStatusCode.Forbidden, HttpStatusCode.Unauthorized].includes(
          err.status,
        )
      ) {
        inject(AuthService).logout();
        router.navigate(['login']);
      }
      return throwError(() => err);
    }),
  );
};
