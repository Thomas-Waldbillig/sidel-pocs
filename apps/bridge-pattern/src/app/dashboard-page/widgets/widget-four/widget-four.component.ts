import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { BASE_WIDGET, BaseWidget, BaseWidgetConfig } from '../../behaviors';

@Component({
  selector: 'sp-widget-four',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>widget-four works!</p>
    <pre>{{ widgetConfig.data | json }}</pre>
  `,
  styleUrls: ['./widget-four.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: BASE_WIDGET, useExisting: WidgetFourComponent },
    // { provide: RESIZABLE_WIDGET, useExisting: WidgetFourComponent },
  ],
})
export class WidgetFourComponent implements BaseWidget /* ResizableWidget */ {
  // public readonly resizeStrategy: ResizeStrategy = new DefaultResizeStrategy();

  @Input({ required: true })
  public widgetConfig!: BaseWidgetConfig;
}
