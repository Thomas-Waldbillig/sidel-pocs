import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import {
  BASE_WIDGET,
  BaseWidget,
  DefaultRefreshStrategy,
  REFRESHABLE_WIDGET,
  RefreshStrategy,
  RefreshableWidget,
  WidgetPosition,
} from '../../traits';

@Component({
  selector: 'sp-widget-two',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>widget-two works!</p>
    <p>{{ data | json }}</p>
    <p>Is Loading: {{ refreshStrategy.isLoading$ | async }}</p>
    <p *ngIf="refreshStrategy.isLoading$ | async">{{ refreshStrategy.type }}</p>
  `,
  styleUrls: ['./widget-two.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: BASE_WIDGET, useExisting: WidgetTwoComponent },
    { provide: REFRESHABLE_WIDGET, useExisting: WidgetTwoComponent },
  ],
})
export class WidgetTwoComponent implements BaseWidget, RefreshableWidget {
  public readonly refreshStrategy: RefreshStrategy =
    new DefaultRefreshStrategy();

  @Input({ required: true })
  public label!: string;

  @Input({ required: true })
  public position!: WidgetPosition;

  @Input({ required: true })
  public data!: unknown;
}
