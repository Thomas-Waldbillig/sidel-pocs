import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { WidgetDirective } from '../../shared/directives/widget.directive';
import { WidgetComponentPipe } from '../../shared/pipes';
import { BaseWidgetConfig, WidgetType } from '../behaviors';
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
        <sp-widget-wrapper class="widget">
          <!-- <ng-container [spWidget]="widget" /> -->
          <!-- <ng-template [spWidget]="widget" /> -->

          <!-- NO DATA -->
          <!-- <ng-container *ngComponentOutlet="widget | widgetComponent" /> -->

          <ng-container [ngSwitch]="widget.type">
            <ng-container *ngSwitchCase="'widget-one'">
              <sp-widget-one [widgetConfig]="widget" />
            </ng-container>

            <ng-container *ngSwitchCase="'widget-two'">
              <sp-widget-two [widgetConfig]="widget" />
            </ng-container>

            <ng-container *ngSwitchCase="'widget-three'">
              <sp-widget-three [widgetConfig]="widget" />
            </ng-container>

            <ng-container *ngSwitchCase="'widget-four'">
              <sp-widget-four [widgetConfig]="widget" />
            </ng-container>

            <p *ngSwitchDefault>Invalid widget type</p>
          </ng-container>
        </sp-widget-wrapper>
      </ng-container>
    </div>
  `,
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent {
  protected widgets: (BaseWidgetConfig & { type: WidgetType })[] = widgetData;
}
