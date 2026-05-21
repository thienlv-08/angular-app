import { Routes } from '@angular/router';

import { AppShell } from './layout/app-shell.component';

export const routes: Routes = [
  {
    path: '',
    component: AppShell,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./features/dashboard/dashboard.page').then((m) => m.DashboardPage),
        title: 'Dashboard',
      },
      {
        path: 'cash',
        loadChildren: () =>
          import('./features/cash/cash.routes').then((m) => m.cashRoutes),
      },
      {
        path: 'receivables',
        loadComponent: () =>
          import('./features/receivables/receivables.page').then((m) => m.ReceivablesPage),
        title: 'Phải thu',
      },
      {
        path: 'payables',
        loadComponent: () =>
          import('./features/payables/payables.page').then((m) => m.PayablesPage),
        title: 'Phải trả',
      },
      {
        path: 'forecast',
        loadComponent: () =>
          import('./features/forecast/forecast.page').then((m) => m.ForecastPage),
        title: 'Dự báo',
      },
      {
        path: 'budget',
        loadComponent: () =>
          import('./features/budget/budget.page').then((m) => m.BudgetPage),
        title: 'Ngân sách',
      },
      {
        path: 'approvals',
        loadComponent: () =>
          import('./features/approvals/approvals.page').then((m) => m.ApprovalsPage),
        title: 'Phê duyệt',
      },
      {
        path: 'reports',
        loadComponent: () =>
          import('./features/reports/reports.page').then((m) => m.ReportsPage),
        title: 'Báo cáo',
      },
      {
        path: 'settings',
        loadComponent: () =>
          import('./features/settings/settings.page').then((m) => m.SettingsPage),
        title: 'Cài đặt',
      },
    ],
  },
  { path: '**', redirectTo: 'dashboard' },
];
