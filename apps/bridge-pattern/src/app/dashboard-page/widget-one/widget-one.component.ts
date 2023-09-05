import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'sidel-pocs-widget-one',
  standalone: true,
  imports: [CommonModule],
  template: `<p>widget-one works!</p>`,
  styleUrls: ['./widget-one.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WidgetOneComponent {}
