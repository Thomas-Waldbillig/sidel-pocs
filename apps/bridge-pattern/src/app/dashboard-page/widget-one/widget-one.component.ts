import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'sp-widget-one',
  standalone: true,
  imports: [CommonModule],
  template: `<p>widget-one works!</p>`,
  styleUrls: ['./widget-one.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WidgetOneComponent {}
