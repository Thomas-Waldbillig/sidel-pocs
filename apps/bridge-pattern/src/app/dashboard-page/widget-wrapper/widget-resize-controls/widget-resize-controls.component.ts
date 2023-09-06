import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { WidgetPosition } from '../../behaviors/base.behavior';
import { ResizeStrategy } from '../../behaviors/resizable.behavior';

@Component({
  selector: 'sp-widget-resize-controls',
  standalone: true,
  imports: [CommonModule, MatButtonToggleModule, MatIconModule],
  template: `
    <mat-button-toggle-group name="fontStyle" aria-label="Font Style">
      <mat-button-toggle
        (click)="strategy.decreaseHeight(position)"
        [disabled]="position.height <= strategy.minHeight"
      >
        <mat-icon class="vertical shrink">unfold_less</mat-icon>
      </mat-button-toggle>

      <mat-button-toggle
        (click)="strategy.increaseHeight(position)"
        [disabled]="position.height >= strategy.maxHeight"
      >
        <mat-icon class="vertical grow">unfold_more</mat-icon>
      </mat-button-toggle>

      <mat-button-toggle
        (click)="strategy.decreaseWidth(position)"
        [disabled]="position.width <= strategy.minWidth"
      >
        <mat-icon class="horizontal shrink">unfold_less</mat-icon>
      </mat-button-toggle>

      <mat-button-toggle
        (click)="strategy.increaseWidth(position)"
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
}
