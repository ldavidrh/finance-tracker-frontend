import { Routes } from '@angular/router';

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
    path: 'dashboard',
    loadComponent: () =>
      import('./views/dashboard/dashboard').then((c) => c.Dashboard),
  },

  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: '**', pathMatch: 'full', redirectTo: 'login' },
];
