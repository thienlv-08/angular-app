import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

interface NavItem {
  label: string;
  path: string;
  icon: string;
}

interface NavGroup {
  label: string;
  items: NavItem[];
}

@Component({
  selector: 'app-shell',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
  ],
  templateUrl: './app-shell.component.html',
  styleUrl: './app-shell.component.css',
})
export class AppShell {
  protected readonly sidenavExpanded = signal(true);

  protected readonly navGroups: NavGroup[] = [
    {
      label: 'Tổng quan',
      items: [{ label: 'Dashboard', path: '/dashboard', icon: 'dashboard' }],
    },
    {
      label: 'Dòng tiền',
      items: [
        { label: 'Giao dịch', path: '/cash/transactions', icon: 'swap_horiz' },
        { label: 'Tài khoản tiền', path: '/cash/accounts', icon: 'account_balance' },
      ],
    },
    {
      label: 'Công nợ',
      items: [
        { label: 'Phải thu', path: '/receivables', icon: 'call_received' },
        { label: 'Phải trả', path: '/payables', icon: 'call_made' },
      ],
    },
    {
      label: 'Kế hoạch',
      items: [
        { label: 'Dự báo', path: '/forecast', icon: 'trending_up' },
        { label: 'Ngân sách', path: '/budget', icon: 'savings' },
      ],
    },
    {
      label: 'Vận hành',
      items: [
        { label: 'Phê duyệt', path: '/approvals', icon: 'fact_check' },
        { label: 'Báo cáo', path: '/reports', icon: 'assessment' },
      ],
    },
    {
      label: 'Hệ thống',
      items: [{ label: 'Cài đặt', path: '/settings', icon: 'settings' }],
    },
  ];

  toggleSidenav(): void {
    this.sidenavExpanded.update((expanded) => !expanded);
  }
}
