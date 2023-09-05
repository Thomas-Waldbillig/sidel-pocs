import { Pipe, PipeTransform } from '@angular/core';
import * as Widgets from '../../dashboard-page/widgets';
import { Widget } from '../../models';

@Pipe({ name: 'widgetComponent', standalone: true })
export class WidgetComponentPipe implements PipeTransform {
  public transform({ type }: Widget): Widgets.WidgetComponentClass {
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
