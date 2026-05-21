import { ChangeDetectionStrategy, Component } from '@angular/core';

import { PageHeaderComponent } from '../../shared/page-header.component';

@Component({
  selector: 'app-settings-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [PageHeaderComponent],
  template: `
    <app-page-header
      title="Cài đặt"
      description="Danh mục, công ty, chi nhánh, phân quyền người dùng."
    />
  `,
})
export class SettingsPage {}
