import { inject, Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ToastType } from '../models/toast.model';
import { Toast } from '../components/toast/toast';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  private snack = inject(MatSnackBar);

  success(message: string) {
    this.snack.openFromComponent(Toast, {
      data: { message, type: ToastType.SUCCESS },
    });
  }

  info(message: string) {
    this.snack.openFromComponent(Toast, {
      data: { message, type: ToastType.INFO },
    });
  }

  warning(message: string) {
    this.snack.openFromComponent(Toast, {
      data: { message, type: ToastType.WARNING },
    });
  }

  error(message: string) {
    this.snack.openFromComponent(Toast, {
      data: { message, type: ToastType.ERROR },
    });
  }
}
