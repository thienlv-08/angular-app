import { ChangeDetectionStrategy, Component } from '@angular/core';

import { PageHeaderComponent } from '../../../shared/page-header.component';

@Component({
  selector: 'app-accounts-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [PageHeaderComponent],
  template: `
    <app-page-header
      title="Tài khoản tiền"
      description="Danh sách tài khoản ngân hàng, tiền mặt và số dư theo thời gian."
    />
  `,
})
export class AccountsPage {}
