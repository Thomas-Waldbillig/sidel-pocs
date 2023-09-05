import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { WidgetData } from '../../../models';

@Component({
  selector: 'sp-widget-three',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>widget-three works!</p>
    <pre>{{ data | json }}</pre>
  `,
  styleUrls: ['./widget-three.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WidgetThreeComponent {
  @Input()
  public data!: WidgetData;
}
