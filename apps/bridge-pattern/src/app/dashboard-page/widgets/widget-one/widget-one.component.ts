import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { WidgetData } from '../../../models';

@Component({
  selector: 'sp-widget-one',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>widget-one works!</p>
    <pre>{{ data | json }}</pre>
  `,
  styleUrls: ['./widget-one.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WidgetOneComponent {
  @Input()
  public data!: WidgetData;
}
