import { CommonModule, CurrencyPipe, DatePipe } from '@angular/common';
import { Component, inject, signal, Signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatDivider } from '@angular/material/divider';
import { ExpenseService } from '../../core/services/expense/expense-service';

interface ExpenseTable {
  value: number;
  user: { id: string; name: string };
  category: { id: string; name: string };
  createdAt: Date;
}

const MOCK_EXPENSES: ExpenseTable[] = [
  {
    value: 25000,
    user: { id: 'u1', name: 'David' },
    category: { id: 'c1', name: 'Groceries' },
    createdAt: new Date('2025-08-10T14:30:00'),
  },
  {
    value: 120000,
    user: { id: 'u2', name: 'Natalia' },
    category: { id: 'c2', name: 'Electronics' },
    createdAt: new Date('2025-08-15T09:15:00'),
  },
  {
    value: 50000,
    user: { id: 'u1', name: 'David' },
    category: { id: 'c3', name: 'Transport' },
    createdAt: new Date('2025-08-20T19:45:00'),
  },
];

@Component({
  selector: 'app-expenses',
  imports: [
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    CurrencyPipe,
    DatePipe,
    MatDivider,
    CommonModule,
  ],
  templateUrl: './expenses.html',
  styleUrl: './expenses.scss',
})
export class Expenses {
  private expenseService = inject(ExpenseService);

  // expenses = toSignal(this.expenseService.getExpenses());

  expenses$ = this.expenseService.getExpenses();

  displayedColumns: Signal<String[]> = signal([
    'createdAt',
    'value',
    'category',
    'actions',
  ]);
}
