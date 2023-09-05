import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Widget } from '../../models';

@Component({
  selector: 'sp-widget-wrapper',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
  template: `
    <mat-card>
      <mat-card-header>
        <mat-card-title>{{ widget.label }}</mat-card-title>
        <mat-card-subtitle>subtitle</mat-card-subtitle>
      </mat-card-header>

      <mat-card-content>
        <pre>{{ widget.data | json }}</pre>
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
  @Input({ required: true })
  public widget!: Widget;

  @HostBinding('style.--height-span')
  protected get heightSpan(): number {
    return this.widget.position.height;
  }

  @HostBinding('style.--width-span')
  protected get widthSpan(): number {
    return this.widget.position.width;
  }
}
