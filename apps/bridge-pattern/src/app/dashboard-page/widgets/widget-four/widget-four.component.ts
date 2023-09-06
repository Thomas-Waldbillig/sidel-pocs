import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { BASE_WIDGET, BaseWidget, WidgetPosition } from '../../behaviors';

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
  providers: [{ provide: BASE_WIDGET, useExisting: WidgetFourComponent }],
})
export class WidgetFourComponent implements BaseWidget {
  @Input({ required: true })
  public label!: string;

  @Input({ required: true })
  public position!: WidgetPosition;

  @Input({ required: true })
  public data!: unknown;
}
