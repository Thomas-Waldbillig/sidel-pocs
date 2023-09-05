import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  ElementRef,
  HostBinding,
  Input,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Widget } from '../../models';
import { RESIZABLE_WIDGET } from '../behaviors';
import { WidgetOneComponent } from '../widgets';

@Component({
  selector: 'sp-widget-wrapper',
  standalone: true,
  imports: [WidgetOneComponent, CommonModule, MatCardModule, MatButtonModule],
  template: `
    <div *ngIf="resizableWidget">asd</div>

    <mat-card>
      <mat-card-header>
        <mat-card-title>{{ widget.label }}</mat-card-title>
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

  @HostBinding('style.--height-span')
  protected get heightSpan(): number {
    return this.widget.position.height;
  }

  @HostBinding('style.--width-span')
  protected get widthSpan(): number {
    return this.widget.position.width;
  }

  @Input({ required: true })
  public widget!: Widget;

  // @ContentChild(WidgetOneComponent)
  @ContentChild(RESIZABLE_WIDGET)
  public resizableWidget!: ElementRef<HTMLElement>;

  // LIFECYCLE HOOKS

  // ...
}
