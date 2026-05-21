import { ChangeDetectionStrategy, Component } from '@angular/core';

import { PageHeaderComponent } from '../../../shared/page-header.component';

@Component({
  selector: 'app-transactions-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [PageHeaderComponent],
  template: `
    <app-page-header
      title="Giao dịch"
      description="Quản lý phiếu thu, phiếu chi và chuyển nội bộ giữa các tài khoản."
    />
  `,
})
export class TransactionsPage {}
