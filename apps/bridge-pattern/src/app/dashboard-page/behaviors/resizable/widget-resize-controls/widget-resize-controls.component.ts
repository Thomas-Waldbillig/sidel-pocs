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
import { WidgetPosition } from '../../base.behavior';

@Component({
  selector: 'sp-widget-resize-controls',
  standalone: true,
  imports: [CommonModule, MatButtonToggleModule, MatIconModule],
  template: `
    <mat-button-toggle-group name="fontStyle" aria-label="Font Style">
      <mat-button-toggle (click)="decreaseHeight()">
        <mat-icon class="vertical shrink">unfold_less</mat-icon>
      </mat-button-toggle>

      <mat-button-toggle (click)="increaseHeight()">
        <mat-icon class="vertical grow">unfold_more</mat-icon>
      </mat-button-toggle>

      <mat-button-toggle (click)="decreaseWidth()">
        <mat-icon class="horizontal shrink">unfold_less</mat-icon>
      </mat-button-toggle>

      <mat-button-toggle (click)="increaseWidth()">
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

  @Output()
  public sizeUpdated = new EventEmitter<WidgetPosition>();

  protected increaseHeight() {
    const { height, width } = this.position;
    this.sizeUpdated.emit({ height: height + 1, width });
  }

  protected decreaseHeight() {
    const { height, width } = this.position;
    this.sizeUpdated.emit({ height: height - 1, width });
  }

  protected increaseWidth() {
    const { height, width } = this.position;
    this.sizeUpdated.emit({ height, width: width + 1 });
  }

  protected decreaseWidth() {
    const { height, width } = this.position;
    this.sizeUpdated.emit({ height, width: width - 1 });
  }
}
