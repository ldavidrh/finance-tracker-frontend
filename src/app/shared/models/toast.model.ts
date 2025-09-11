export interface ToastData {
  message: string;
  type: ToastType;
}

export enum ToastType {
  SUCCESS = 0,
  INFO,
  WARNING,
  ERROR,
}
