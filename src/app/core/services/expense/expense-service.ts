import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import {
  ExpenseRequest,
  ExpenseResponse,
} from '../../../shared/models/expense.model';

@Injectable({
  providedIn: 'root',
})
export class ExpenseService {
  private url = environment.baseUrl + '/expenses';
  private httpClient = inject(HttpClient);

  registerExpense(body: ExpenseRequest): Observable<ExpenseResponse> {
    return this.httpClient.post<ExpenseResponse>(this.url, body);
  }

  getExpenses(): Observable<ExpenseResponse[]> {
    return this.httpClient.get<ExpenseResponse[]>(this.url);
  }

  deleteExpense(id: string): Observable<ExpenseResponse> {
    return this.httpClient.delete<ExpenseResponse>(`${this.url}/${id}`);
  }

  updateExpense(id: string, body: ExpenseRequest): Observable<ExpenseResponse> {
    return this.httpClient.put<ExpenseResponse>(`${this.url}/${id}`, body);
  }
}
