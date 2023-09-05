import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Widget } from '../../models';
import { WidgetFourComponent } from '../widget-four/widget-four.component';
import { WidgetOneComponent } from '../widget-one/widget-one.component';
import { WidgetThreeComponent } from '../widget-three/widget-three.component';
import { WidgetTwoComponent } from '../widget-two/widget-two.component';

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
        <ng-template #widgetContainer />
      </mat-card-content>

      <mat-card-actions align="end">
        <button mat-raised-button color="primary">Ok</button>
      </mat-card-actions>
    </mat-card>
  `,
  styleUrls: ['./widget-wrapper.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WidgetWrapperComponent implements OnInit {
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

  @ViewChild('widgetContainer', { static: true, read: ViewContainerRef })
  private widgetContainerRef!: ViewContainerRef;

  // LIFECYCLE HOOKS

  public ngOnInit(): void {
    // TODO: move to a service
    this.widgetContainerRef.clear();
    switch (this.widget.type) {
      case 'widget-one':
        this.widgetContainerRef.createComponent(WidgetOneComponent);
        break;
      case 'widget-two':
        this.widgetContainerRef.createComponent(WidgetTwoComponent);
        break;
      case 'widget-three':
        this.widgetContainerRef.createComponent(WidgetThreeComponent);
        break;
      case 'widget-four':
        this.widgetContainerRef.createComponent(WidgetFourComponent);
        break;
      default:
        throw new Error('Invalid widget type');
    }
  }
}
