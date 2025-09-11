import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import { ExpenseService } from '../../core/services/expense/expense-service';
import { NavItem } from '../../shared/models/models';

@Component({
  selector: 'app-home',
  imports: [
    MatSidenavModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    RouterModule,
    CommonModule,
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  private expenseService = inject(ExpenseService);

  navItems = signal<NavItem[]>([
    { title: 'Dashboard', url: '/dashboard', icon: 'dashboard' },
    { title: 'Expenses', url: 'expenses', icon: 'payments' },
    { title: 'Budgets', url: '/budgets', icon: 'account_balance_wallet' },
    { title: 'Reports', url: '/reports', icon: 'analytics' },
  ]);

  expenses$ = this.expenseService.getExpenses();
}
