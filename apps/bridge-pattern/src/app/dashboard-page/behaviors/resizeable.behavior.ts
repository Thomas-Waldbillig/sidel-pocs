import { InjectionToken } from '@angular/core';

export type ResizableWidgetConfig = { answer: number };

export type ResizableWidget = { resizableConfig: ResizableWidgetConfig };

export const RESIZABLE_WIDGET = new InjectionToken<ResizableWidgetConfig>(
  'RESIZABLE_WIDGET'
);
