import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'sidel-pocs-dashboard-page',
  standalone: true,
  imports: [CommonModule],
  template: `<p>dashboard-page works!</p>`,
  styleUrls: ['./dashboard-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardPageComponent {}
