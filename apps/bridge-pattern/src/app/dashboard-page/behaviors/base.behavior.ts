import { InjectionToken } from '@angular/core';

export type WidgetType =
  | 'widget-one'
  | 'widget-two'
  | 'widget-three'
  | 'widget-four';

export type WidgetData = unknown;

export interface WidgetPosition {
  height: number;
  width: number;
}

export interface BaseWidgetConfig {
  label: string;
  position: WidgetPosition;
  data: WidgetData;
}

export interface BaseWidget {
  widgetConfig: BaseWidgetConfig;
}

export const BASE_WIDGET = new InjectionToken<BaseWidget>('BASE_WIDGET');
