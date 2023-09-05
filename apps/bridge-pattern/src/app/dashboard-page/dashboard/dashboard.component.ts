import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Widget } from '../../models';
import { WidgetWrapperComponent } from '../widget-wrapper/widget-wrapper.component';
import { widgetData } from './dashboard.data';

@Component({
  selector: 'sp-dashboard',
  standalone: true,
  imports: [CommonModule, WidgetWrapperComponent],
  template: `
    <h2>Dashboard Component</h2>

    <div class="widgets">
      <ng-container *ngFor="let widget of widgets">
        <sp-widget-wrapper class="widget" [widget]="widget" />
      </ng-container>
    </div>
  `,
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent {
  protected widgets: Widget[] = widgetData;
}
