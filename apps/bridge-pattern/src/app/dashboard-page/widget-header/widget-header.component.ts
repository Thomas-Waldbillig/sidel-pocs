import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'sidel-pocs-widget-header',
  standalone: true,
  imports: [CommonModule],
  template: `<p>widget-header works!</p>`,
  styleUrls: ['./widget-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WidgetHeaderComponent {}
