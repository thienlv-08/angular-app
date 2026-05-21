import { ChangeDetectionStrategy, Component } from '@angular/core';

import { PageHeaderComponent } from '../../shared/page-header.component';

@Component({
  selector: 'app-payables-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [PageHeaderComponent],
  template: `
    <app-page-header
      title="Phải trả"
      description="Quản lý công nợ nhà cung cấp và lịch thanh toán."
    />
  `,
})
export class PayablesPage {}
