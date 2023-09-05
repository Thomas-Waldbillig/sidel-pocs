import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  Provider,
  ValueProvider,
  inject,
} from '@angular/core';
import { WidgetData } from '../../../models';
import {
  BASE_WIDGET,
  BaseWidget,
  RESIZABLE_WIDGET,
  ResizableWidget,
  ResizableWidgetConfig,
} from '../../behaviors';

const baseWidget: Provider = {
  provide: BASE_WIDGET,
  useValue: null,
  multi: true,
};

const resizableConfig: ValueProvider = {
  provide: RESIZABLE_WIDGET,
  useValue: { answer: 42 } as ResizableWidgetConfig,
  multi: true,
};

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
  providers: [baseWidget, resizableConfig],
})
export class WidgetOneComponent implements BaseWidget, ResizableWidget {
  public resizableConfig = inject(RESIZABLE_WIDGET);

  @Input()
  public data!: WidgetData;
}
