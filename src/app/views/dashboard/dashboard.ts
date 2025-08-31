import { Component, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NavItem } from '../../shared/models';
import { MatCardModule } from '@angular/material/card';
import { MatListModule, MatNavList } from '@angular/material/list';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [
    MatSidenavModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    RouterModule,
  ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {
  navItems = signal<NavItem[]>([
    { title: 'Dashboard', url: '/dashboard', icon: 'dashboard' },
    { title: 'Expenses', url: '/expenses', icon: 'payments' },
    { title: 'Budgets', url: '/budgets', icon: 'account_balance_wallet' },
    { title: 'Reports', url: '/reports', icon: 'analytics' },
  ]);
}
