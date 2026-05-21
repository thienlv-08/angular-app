import { ChangeDetectionStrategy, Component } from '@angular/core';

import { PageHeaderComponent } from '../../shared/page-header.component';

@Component({
  selector: 'app-approvals-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [PageHeaderComponent],
  template: `
    <app-page-header
      title="Hàng chờ phê duyệt"
      description="Duyệt phiếu thu, phiếu chi và các yêu cầu chi tiêu."
    />
  `,
})
export class ApprovalsPage {}
