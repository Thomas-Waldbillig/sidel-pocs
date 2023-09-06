import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { WidgetDirective } from '../../shared/directives/widget.directive';
import { WidgetComponentPipe } from '../../shared/pipes';
import { BaseWidget, WidgetType } from '../traits';
import { WidgetWrapperComponent } from '../widget-wrapper/widget-wrapper.component';
import {
  WidgetFourComponent,
  WidgetOneComponent,
  WidgetThreeComponent,
  WidgetTwoComponent,
} from '../widgets';
import { widgetData } from './dashboard.data';

@Component({
  selector: 'sp-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    WidgetWrapperComponent,
    WidgetComponentPipe,
    WidgetDirective,
    WidgetOneComponent,
    WidgetTwoComponent,
    WidgetThreeComponent,
    WidgetFourComponent,
  ],
  template: `
    <h2>Dashboard Component</h2>

    <div class="widgets">
      <ng-container *ngFor="let widget of widgets">
        <!-- <sp-widget-wrapper class="widget" [ngSwitch]="widget.type">
        <ng-container [spWidget]="widget" />
        <ng-template [spWidget]="widget" />
        <ng-container *ngComponentOutlet="widget | widgetComponent" />
        </sp-widget-wrapper> -->

        <sp-widget-wrapper class="widget" [ngSwitch]="widget.type">
          <sp-widget-one
            *ngSwitchCase="'widget-one'"
            [label]="widget.label"
            [position]="widget.position"
            [data]="widget.data"
          />

          <sp-widget-two
            *ngSwitchCase="'widget-two'"
            [label]="widget.label"
            [position]="widget.position"
            [data]="widget.data"
          />

          <sp-widget-three
            *ngSwitchCase="'widget-three'"
            [label]="widget.label"
            [position]="widget.position"
            [data]="widget.data"
          />

          <sp-widget-four
            *ngSwitchCase="'widget-four'"
            [label]="widget.label"
            [position]="widget.position"
            [data]="widget.data"
          />

          <p *ngSwitchDefault>Invalid widget type</p>
        </sp-widget-wrapper>
      </ng-container>
    </div>
  `,
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent {
  protected widgets: (BaseWidget & { type: WidgetType })[] = widgetData;
}
