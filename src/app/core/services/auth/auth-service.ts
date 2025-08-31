import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import {
  SignUpRequest,
  SignUpResponse,
  UserLoginRequest,
} from '../../../shared/models';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = environment.baseUrl;
  private endpoint = `${this.baseUrl}/users`;

  private httpClient = inject(HttpClient);

  signup(payload: SignUpRequest): Observable<void> {
    return this.httpClient.post<void>(this.endpoint, payload);
  }

  login(loginRequest: UserLoginRequest) {
    return this.httpClient.post<void>(this.endpoint, loginRequest);
  }
}
