import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  ElementRef,
  HostBinding,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {
  BASE_WIDGET,
  BaseWidget,
  RESIZABLE_WIDGET,
  ResizableWidget,
  WidgetPosition,
} from '../behaviors';
import { WidgetOneComponent } from '../widgets';

@Component({
  selector: 'sp-widget-wrapper',
  standalone: true,
  imports: [WidgetOneComponent, CommonModule, MatCardModule, MatButtonModule],
  template: `
    <mat-card>
      <mat-card-header>
        <mat-card-title>{{ baseWidget.widgetConfig.label }}</mat-card-title>
        <mat-card-subtitle>subtitle</mat-card-subtitle>
      </mat-card-header>

      <mat-card-content>
        <ng-content />
      </mat-card-content>

      <mat-card-actions align="end">
        <button mat-raised-button color="primary">Ok</button>
      </mat-card-actions>
    </mat-card>
  `,
  styleUrls: ['./widget-wrapper.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WidgetWrapperComponent {
  // DEPENDENCY INJECTIONS

  // ...

  // VARIABLES

  protected get position(): WidgetPosition {
    return this.baseWidget.widgetConfig.position;
  }

  @HostBinding('style.--height-span')
  protected get heightSpan(): number {
    return this.position.height;
  }

  @HostBinding('style.--width-span')
  protected get widthSpan(): number {
    return this.position.width;
  }

  @ContentChild(WidgetOneComponent)
  public childComponent!: ElementRef<WidgetOneComponent>;

  @ContentChild(BASE_WIDGET)
  public baseWidget!: BaseWidget;

  @ContentChild(RESIZABLE_WIDGET)
  public resizeConfig!: ResizableWidget;

  // LIFECYCLE HOOKS

  // ...
}
