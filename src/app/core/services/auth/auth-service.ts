import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import {
  SignUpRequest,
  SignUpResponse,
  UserLoginRequest,
} from '../../../shared/models/models';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

export interface LoginResponse {
  access_token: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = environment.baseUrl;
  private endpoint = `${this.baseUrl}/auth`;

  private httpClient = inject(HttpClient);

  login(loginRequest: UserLoginRequest): Observable<LoginResponse> {
    const url = this.endpoint + '/login';
    return this.httpClient.post<LoginResponse>(url, loginRequest);
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }

  storeToken(token: string): void {
    if (!token) throw new Error('Token is required!');
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    const token = localStorage.getItem('token');
    if (!token) return null;
    return token;
  }

  logout(): void {
    localStorage.removeItem('token');
  }
}
