import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { ResizeStrategy, WidgetPosition } from '../../behaviors';

@Component({
  selector: 'sp-widget-resize-controls',
  standalone: true,
  imports: [CommonModule, MatButtonToggleModule, MatIconModule],
  template: `
    <mat-button-toggle-group name="fontStyle" aria-label="Font Style">
      <mat-button-toggle
        (click)="positionUpdated.emit(strategy.decreaseHeight(position))"
        [disabled]="position.height <= strategy.minHeight"
      >
        <mat-icon class="vertical shrink">unfold_less</mat-icon>
      </mat-button-toggle>

      <mat-button-toggle
        (click)="positionUpdated.emit(strategy.increaseHeight(position))"
        [disabled]="position.height >= strategy.maxHeight"
      >
        <mat-icon class="vertical grow">unfold_more</mat-icon>
      </mat-button-toggle>

      <mat-button-toggle
        (click)="positionUpdated.emit(strategy.decreaseWidth(position))"
        [disabled]="position.width <= strategy.minWidth"
      >
        <mat-icon class="horizontal shrink">unfold_less</mat-icon>
      </mat-button-toggle>

      <mat-button-toggle
        (click)="positionUpdated.emit(strategy.increaseWidth(position))"
        [disabled]="position.width >= strategy.maxWidth"
      >
        <mat-icon class="horizontal grow">unfold_more</mat-icon>
      </mat-button-toggle>
    </mat-button-toggle-group>
  `,
  styleUrls: ['./widget-resize-controls.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WidgetResizeControlsComponent {
  @Input({ required: true })
  public position!: WidgetPosition;

  @Input({ required: true })
  public strategy!: ResizeStrategy;

  @Output()
  public positionUpdated: EventEmitter<WidgetPosition> =
    new EventEmitter<WidgetPosition>();
}
