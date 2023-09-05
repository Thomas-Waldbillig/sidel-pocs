import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  inject,
} from '@angular/core';
import {
  BASE_WIDGET,
  BaseWidget,
  BaseWidgetConfig,
  RESIZABLE,
  Resizable,
  WidgetPosition,
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
    { provide: RESIZABLE, useExisting: WidgetOneComponent },
  ],
})
export class WidgetOneComponent implements BaseWidget, Resizable {
  private readonly changeDetectorRef = inject(ChangeDetectorRef);

  @Input({ required: true })
  public widgetConfig!: BaseWidgetConfig;

  public updateSize(position: WidgetPosition): void {
    this.widgetConfig.position = position;
    this.changeDetectorRef.markForCheck();
  }

  public resetSize(): void {
    // TODO
  }
}
