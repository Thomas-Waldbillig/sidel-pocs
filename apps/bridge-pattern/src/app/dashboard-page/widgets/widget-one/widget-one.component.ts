import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import {
  BASE_WIDGET,
  BaseWidget,
  BaseWidgetConfig,
  DefaultResizeStrategy,
  RESIZABLE_WIDGET,
  ResizableWidget,
  ResizeStrategy,
} from '../../behaviors';

@Component({
  selector: 'sp-widget-one',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header>Widget One</header>
    <p>{{ widgetConfig.data | json }}</p>
    <p>{{ widgetConfig.position | json }}</p>
  `,
  styleUrls: ['./widget-one.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: BASE_WIDGET, useExisting: WidgetOneComponent },
    { provide: RESIZABLE_WIDGET, useExisting: WidgetOneComponent },
  ],
})
export class WidgetOneComponent implements BaseWidget, ResizableWidget {
  public readonly resizeStrategy: ResizeStrategy = new DefaultResizeStrategy();

  @Input({ required: true })
  public widgetConfig!: BaseWidgetConfig;
}
