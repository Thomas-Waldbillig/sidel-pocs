import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'sp-widget-header',
  standalone: true,
  imports: [CommonModule],
  template: `<p>widget-header works!</p>`,
  styleUrls: ['./widget-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WidgetHeaderComponent {}
