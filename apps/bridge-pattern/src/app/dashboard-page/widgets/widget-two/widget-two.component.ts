import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { WidgetData } from '../../../models';

@Component({
  selector: 'sp-widget-two',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>widget-two works!</p>
    <pre>{{ data | json }}</pre>
  `,
  styleUrls: ['./widget-two.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WidgetTwoComponent {
  @Input()
  public data!: WidgetData;
}
