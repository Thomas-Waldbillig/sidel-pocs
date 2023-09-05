import { Type } from '@angular/core';
import { WidgetFourComponent } from './widget-four/widget-four.component';
import { WidgetOneComponent } from './widget-one/widget-one.component';
import { WidgetThreeComponent } from './widget-three/widget-three.component';
import { WidgetTwoComponent } from './widget-two/widget-two.component';

export * from './widget-four/widget-four.component';
export * from './widget-one/widget-one.component';
export * from './widget-three/widget-three.component';
export * from './widget-two/widget-two.component';

export type WidgetComponent =
  | WidgetOneComponent
  | WidgetTwoComponent
  | WidgetThreeComponent
  | WidgetFourComponent;

export type WidgetComponentClass = Type<WidgetComponent>;
