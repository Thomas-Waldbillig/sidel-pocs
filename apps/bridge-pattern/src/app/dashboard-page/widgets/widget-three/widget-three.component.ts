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
  selector: 'sp-widget-three',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>widget-three works!</p>
    <pre>{{ widgetConfig.data | json }}</pre>
  `,
  styleUrls: ['./widget-three.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: BASE_WIDGET, useExisting: WidgetThreeComponent },
    { provide: RESIZABLE_WIDGET, useExisting: WidgetThreeComponent },
  ],
})
export class WidgetThreeComponent implements BaseWidget, ResizableWidget {
  @Input({ required: true })
  public widgetConfig!: BaseWidgetConfig;

  public updateSize(position: WidgetPosition) {
    this.widgetConfig.position = position;
  }

  public resetSize() {
    // TODO
  }
}
