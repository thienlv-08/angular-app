import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-page-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatCardModule],
  template: `
    <mat-card class="page-card">
      <mat-card-header>
        <mat-card-title>{{ title() }}</mat-card-title>
        @if (description()) {
          <mat-card-subtitle>{{ description() }}</mat-card-subtitle>
        }
      </mat-card-header>
    </mat-card>
  `,
  styles: `
    :host {
      display: block;
    }

    .page-card {
      margin: 0;
    }
  `,
})
export class PageHeaderComponent {
  readonly title = input.required<string>();
  readonly description = input<string>('');
}
