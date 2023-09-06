import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  HostBinding,
  inject,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {
  BASE_WIDGET,
  BaseWidget,
  REFRESHABLE_WIDGET,
  RESIZABLE_WIDGET,
  RefreshableWidget,
  ResizableWidget,
  WidgetPosition,
} from '../traits';
import { WidgetResizeControlsComponent } from './widget-resize-controls/widget-resize-controls.component';

@Component({
  selector: 'sp-widget-wrapper',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    WidgetResizeControlsComponent,
  ],
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
        <button
          *ngIf="refreshableWidget?.refreshStrategy as strategy"
          mat-raised-button
          color="accent"
          (click)="strategy.refresh()"
        >
          text
        </button>
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

  @ContentChild(REFRESHABLE_WIDGET)
  public refreshableWidget!: RefreshableWidget;

  protected get position(): WidgetPosition {
    return this.baseWidget.position;
  }

  // LIFECYCLE HOOKS

  // ...
}
