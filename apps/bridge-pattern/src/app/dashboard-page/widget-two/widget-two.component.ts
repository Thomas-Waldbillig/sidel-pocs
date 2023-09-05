import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'sidel-pocs-widget-two',
  standalone: true,
  imports: [CommonModule],
  template: `<p>widget-two works!</p>`,
  styleUrls: ['./widget-two.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WidgetTwoComponent {}
