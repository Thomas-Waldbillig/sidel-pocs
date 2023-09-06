import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import {
  BASE_WIDGET,
  BaseWidget,
  REFRESHABLE_WIDGET,
  RESIZABLE_WIDGET,
  RefreshStrategy,
  RefreshableWidget,
  ResizableWidget,
  ResizeStrategy,
  SlowRefreshStrategy,
  SmallWidgetResizeStrategy,
  WidgetPosition,
} from '../../traits';

@Component({
  selector: 'sp-widget-three',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>widget-three works!</p>
    <p>{{ data | json }}</p>
    <p>Is Loading: {{ refreshStrategy.isLoading$ | async }}</p>
    <p *ngIf="refreshStrategy.isLoading$ | async">{{ refreshStrategy.type }}</p>
  `,
  styleUrls: ['./widget-three.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: BASE_WIDGET, useExisting: WidgetThreeComponent },
    { provide: RESIZABLE_WIDGET, useExisting: WidgetThreeComponent },
    { provide: REFRESHABLE_WIDGET, useExisting: WidgetThreeComponent },
  ],
})
export class WidgetThreeComponent
  implements BaseWidget, ResizableWidget, RefreshableWidget
{
  public readonly refreshStrategy: RefreshStrategy = new SlowRefreshStrategy();

  public readonly resizeStrategy: ResizeStrategy =
    new SmallWidgetResizeStrategy();

  @Input({ required: true })
  public label!: string;

  @Input({ required: true })
  public position!: WidgetPosition;

  @Input({ required: true })
  public data!: unknown;
}
