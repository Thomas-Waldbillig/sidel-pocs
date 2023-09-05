import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { BASE_WIDGET, BaseWidget, BaseWidgetConfig } from '../../behaviors';

@Component({
  selector: 'sp-widget-two',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>widget-two works!</p>
    <pre>{{ widgetConfig.data | json }}</pre>
  `,
  styleUrls: ['./widget-two.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: BASE_WIDGET, useExisting: WidgetTwoComponent },
    // { provide: RESIZABLE_WIDGET, useExisting: WidgetTwoComponent },
  ],
})
export class WidgetTwoComponent implements BaseWidget {
  @Input({ required: true })
  public widgetConfig!: BaseWidgetConfig;
}
