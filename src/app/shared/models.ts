import { FormControl } from '@angular/forms';

export interface LoginFormModel {
  email: FormControl<string>;
  password: FormControl<string>;
}

export interface SignUpFormModel {
  email: FormControl<string>;
  password: FormControl<string>;
  firstName: FormControl<string>;
  lastName: FormControl<string>;
}

export interface SignUpRequest {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

export interface SignUpResponse {
  access_token: string;
}

export interface ServerErrorResponse {
  error: string;
  message: string;
  statusCode: number;
}

export interface NavItem {
  title: string;
  icon: string;
  url: string;
}

export interface UserLoginRequest {
  email: string;
  password: string;
}
