import { CommonModule } from '@angular/common';
import {
  AfterContentInit,
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  QueryList,
  ViewChildren,
  ViewContainerRef,
  inject,
} from '@angular/core';
import { Widget } from '../../models';
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
  imports: [CommonModule, WidgetWrapperComponent, WidgetOneComponent],
  template: `
    <h2>Dashboard Component</h2>

    <div class="widgets">
      <ng-container *ngFor="let widget of widgets">
        <sp-widget-wrapper class="widget" [widget]="widget">
          <ng-template #widgetWrappers />
        </sp-widget-wrapper>
      </ng-container>
    </div>
  `,
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent implements AfterViewInit, AfterContentInit {
  private readonly changeDetectorRef = inject(ChangeDetectorRef);

  protected widgets: Widget[] = widgetData;

  @ViewChildren('widgetWrappers', { read: ViewContainerRef })
  private widgetWrappers!: QueryList<ViewContainerRef>;

  public ngAfterContentInit(): void {
    console.log(this.widgetWrappers);
  }

  public ngAfterViewInit(): void {
    this.widgetWrappers.forEach(
      (ref: ViewContainerRef, index: number): void => {
        const widgetDatum: Widget = widgetData[index];
        const component = ref.createComponent(
          this.getComponentClass(widgetDatum)
        );
        component.instance.data = widgetDatum.data;
      }
    );
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
