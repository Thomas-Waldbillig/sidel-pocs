import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'sp-widget-two',
  standalone: true,
  imports: [CommonModule],
  template: `<p>widget-two works!</p>`,
  styleUrls: ['./widget-two.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WidgetTwoComponent {}
