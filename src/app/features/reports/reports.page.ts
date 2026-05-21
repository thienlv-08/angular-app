import { ChangeDetectionStrategy, Component } from '@angular/core';

import { PageHeaderComponent } from '../../shared/page-header.component';

@Component({
  selector: 'app-reports-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [PageHeaderComponent],
  template: `
    <app-page-header
      title="Báo cáo"
      description="Báo cáo dòng tiền, lưu chuyển tiền tệ và phân tích theo kỳ."
    />
  `,
})
export class ReportsPage {}
