import { ChangeDetectionStrategy, Component } from '@angular/core';

import { PageHeaderComponent } from '../../shared/page-header.component';

@Component({
  selector: 'app-forecast-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [PageHeaderComponent],
  template: `
    <app-page-header
      title="Dự báo dòng tiền"
      description="Lập kế hoạch thu chi và so sánh thực tế với dự báo."
    />
  `,
})
export class ForecastPage {}
