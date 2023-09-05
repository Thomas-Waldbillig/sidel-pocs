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
import {
  WidgetFourComponent,
  WidgetOneComponent,
  WidgetThreeComponent,
  WidgetTwoComponent,
} from '../widgets';

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
    const component = this.widgetContainerRef.createComponent(
      this.getComponentClass(this.widget)
    );
    component.instance.data = this.widget.data;
  }

  // OTHER
  private getComponentClass({ type }: Widget) {
    switch (type) {
      case 'widget-one':
        return WidgetOneComponent;
      case 'widget-two':
        return WidgetTwoComponent;
      case 'widget-three':
        return WidgetThreeComponent;
      case 'widget-four':
        return WidgetFourComponent;
      default:
        throw new Error('Invalid widget type');
    }
  }
}
