import { ChangeDetectionStrategy, Component } from '@angular/core';

import { PageHeaderComponent } from '../../shared/page-header.component';

@Component({
  selector: 'app-dashboard-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [PageHeaderComponent],
  template: `
    <app-page-header
      title="Dashboard"
      description="Tổng quan số dư, thu chi và cảnh báo dòng tiền."
    />
  `,
})
export class DashboardPage {}
