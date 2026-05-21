import { Routes } from '@angular/router';

export const cashRoutes: Routes = [
  { path: '', redirectTo: 'transactions', pathMatch: 'full' },
  {
    path: 'transactions',
    loadComponent: () =>
      import('./transactions/transactions.page').then((m) => m.TransactionsPage),
    title: 'Giao dịch',
  },
  {
    path: 'accounts',
    loadComponent: () =>
      import('./accounts/accounts.page').then((m) => m.AccountsPage),
    title: 'Tài khoản tiền',
  },
];
