import { ChangeDetectionStrategy, Component } from '@angular/core';

import { PageHeaderComponent } from '../../shared/page-header.component';

@Component({
  selector: 'app-budget-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [PageHeaderComponent],
  template: `
    <app-page-header
      title="Ngân sách"
      description="Thiết lập và theo dõi ngân sách theo phòng ban, dự án."
    />
  `,
})
export class BudgetPage {}
