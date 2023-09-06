import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';

@Component({
  selector: 'sp-dashboard-page',
  standalone: true,
  imports: [CommonModule, DashboardComponent],
  template: `
    <h1>Dashboard Page</h1>
    <sp-dashboard />
  `,
  styleUrls: ['./dashboard-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardPageComponent {}
