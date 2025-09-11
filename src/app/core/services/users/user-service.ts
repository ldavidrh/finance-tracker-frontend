import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';
import { SignUpRequest } from '../../../shared/models/models';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private baseUrl = environment.baseUrl;
  private endpoint = `${this.baseUrl}/users`;

  private http = inject(HttpClient);

  signup(payload: SignUpRequest): Observable<void> {
    return this.http.post<void>(this.endpoint, payload);
  }
}
