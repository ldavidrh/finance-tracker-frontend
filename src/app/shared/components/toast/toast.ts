import { Component, Inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';
import { ToastType } from '../../models/toast.model';

@Component({
  selector: 'app-toast',
  imports: [MatIconModule],
  templateUrl: './toast.html',
  styleUrl: './toast.scss',
})
export class Toast {
  toastType = ToastType;

  constructor(
    @Inject(MAT_SNACK_BAR_DATA)
    public data: { type: ToastType; message: string }
  ) {}
}
