import {
  ComponentRef,
  Directive,
  Input,
  ViewContainerRef,
  inject,
} from '@angular/core';
import { BaseWidgetConfig, WidgetType } from '../../dashboard-page';
import * as Widgets from '../../dashboard-page/widgets';

@Directive({ selector: '[spWidget]', standalone: true })
export class WidgetDirective {
  private viewContainerRef = inject(ViewContainerRef);

  @Input()
  public set spWidget({
    type,
    ...data
  }: BaseWidgetConfig & { type: WidgetType }) {
    this.viewContainerRef.clear();
    const component: ComponentRef<Widgets.WidgetComponent> =
      this.viewContainerRef.createComponent(this.getComponentClass(type), {});
    component.instance.widgetConfig = data;
  }

  private getComponentClass(type: WidgetType): Widgets.WidgetComponentClass {
    switch (type) {
      case 'widget-one':
        return Widgets.WidgetOneComponent;
      case 'widget-two':
        return Widgets.WidgetTwoComponent;
      case 'widget-three':
        return Widgets.WidgetThreeComponent;
      case 'widget-four':
        return Widgets.WidgetFourComponent;
      default:
        throw new Error('Invalid widget type');
    }
  }
}
