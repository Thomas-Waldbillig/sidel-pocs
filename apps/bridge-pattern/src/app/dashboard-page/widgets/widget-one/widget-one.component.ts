import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import {
  BASE_WIDGET,
  BaseWidget,
  BaseWidgetConfig,
  RESIZABLE_WIDGET,
  ResizableWidget,
  WidgetPosition,
} from '../../behaviors';

@Component({
  selector: 'sp-widget-one',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>widget-one works!</p>
    <pre>{{ widgetConfig.data | json }}</pre>
  `,
  styleUrls: ['./widget-one.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: BASE_WIDGET, useExisting: WidgetOneComponent },
    { provide: RESIZABLE_WIDGET, useExisting: WidgetOneComponent },
  ],
})
export class WidgetOneComponent implements BaseWidget, ResizableWidget {
  @Input({ required: true })
  public widgetConfig!: BaseWidgetConfig;

  public updateSize(position: WidgetPosition): void {
    this.widgetConfig.position = position;
  }

  public resetSize(): void {
    // TODO
  }
}
