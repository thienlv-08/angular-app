import { ChangeDetectionStrategy, Component } from '@angular/core';

import { PageHeaderComponent } from '../../shared/page-header.component';

@Component({
  selector: 'app-receivables-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [PageHeaderComponent],
  template: `
    <app-page-header
      title="Phải thu"
      description="Theo dõi hóa đơn, công nợ khách hàng và tuổi nợ."
    />
  `,
})
export class ReceivablesPage {}
