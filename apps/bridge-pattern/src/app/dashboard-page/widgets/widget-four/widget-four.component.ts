import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { WidgetData } from '../../../models';

@Component({
  selector: 'sp-widget-four',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>widget-four works!</p>
    <pre>{{ data | json }}</pre>
  `,
  styleUrls: ['./widget-four.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WidgetFourComponent {
  @Input()
  public data!: WidgetData;
}
