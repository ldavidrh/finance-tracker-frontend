import { Routes } from '@angular/router';
import { dashboardGuard } from './core/guards/dashboard-guard';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./views/login/login').then((c) => c.Login),
  },
  {
    path: 'signup',
    loadComponent: () => import('./views/signup/signup').then((c) => c.Signup),
  },
  {
    path: 'confirm-email',
    loadComponent: () =>
      import('./views/confirm-email/confirm-email').then((c) => c.ConfirmEmail),
  },
  {
    path: 'home',
    loadComponent: () => import('./views/home/home').then((c) => c.Home),
    canActivate: [dashboardGuard],
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./views/dashboard/dashboard').then((c) => c.Dashboard),
      },
      {
        path: 'expenses',
        loadComponent: () =>
          import('./views/expenses/expenses').then((c) => c.Expenses),
      },
    ],
  },

  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: '**', pathMatch: 'full', redirectTo: 'login' },
];
