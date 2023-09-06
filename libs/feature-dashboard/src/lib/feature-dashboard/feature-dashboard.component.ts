import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'sidel-pocs-feature-dashboard',
  standalone: true,
  imports: [CommonModule],
  template: `<p>feature-dashboard works!</p>`,
  styleUrls: ['./feature-dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureDashboardComponent {}
