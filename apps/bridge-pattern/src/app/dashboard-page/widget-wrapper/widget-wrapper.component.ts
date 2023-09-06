import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  HostBinding,
  inject,
} from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import {
  BASE_WIDGET,
  BaseWidget,
  RESIZABLE_WIDGET,
  ResizableWidget,
  WidgetPosition,
} from '../behaviors';
import { WidgetResizeControlsComponent } from './widget-resize-controls/widget-resize-controls.component';

@Component({
  selector: 'sp-widget-wrapper',
  standalone: true,
  imports: [CommonModule, MatCardModule, WidgetResizeControlsComponent],
  template: `
    <mat-card>
      <mat-card-header>
        <mat-card-title>{{ baseWidget.label }}</mat-card-title>
        <mat-card-subtitle>subtitle</mat-card-subtitle>
      </mat-card-header>

      <mat-card-content>
        <ng-content />
      </mat-card-content>

      <mat-card-actions align="end">
        <sp-widget-resize-controls
          *ngIf="resizableWidget"
          [position]="position"
          [strategy]="resizableWidget.resizeStrategy"
          (positionUpdated)="baseWidget.position = $event"
        />
      </mat-card-actions>
    </mat-card>
  `,
  styleUrls: ['./widget-wrapper.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WidgetWrapperComponent {
  // DEPENDENCY INJECTIONS

  private readonly changeDetectorRef = inject(ChangeDetectorRef);

  // VARIABLES

  @HostBinding('style.--height-span')
  protected get heightSpan(): number {
    return this.position.height;
  }

  @HostBinding('style.--width-span')
  protected get widthSpan(): number {
    return this.position.width;
  }

  @ContentChild(BASE_WIDGET)
  public baseWidget!: BaseWidget;

  @ContentChild(RESIZABLE_WIDGET)
  public resizableWidget!: ResizableWidget;

  protected get position(): WidgetPosition {
    return this.baseWidget.position;
  }

  // LIFECYCLE HOOKS

  // ...
}
