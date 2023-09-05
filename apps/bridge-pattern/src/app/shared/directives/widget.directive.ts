import { Directive, Input, ViewContainerRef, inject } from '@angular/core';
import * as Widgets from '../../dashboard-page/widgets';
import { Widget } from '../../models';

@Directive({ selector: '[spWidget]', standalone: true })
export class WidgetDirective {
  private viewContainerRef = inject(ViewContainerRef);

  @Input()
  public set spWidget(value: Widget) {
    const component = this.viewContainerRef.createComponent(
      this.getComponentClass(value)
    );
    component.instance.data = value.data;
  }

  private getComponentClass({ type }: Widget) {
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
