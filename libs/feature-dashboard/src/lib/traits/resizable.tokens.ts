import { InjectionToken } from '@angular/core';
import { ResizeStrategy } from './resizable.strategies';

export type ResizableWidget = { resizeStrategy: ResizeStrategy };

export const RESIZABLE_WIDGET = new InjectionToken<ResizableWidget>(
  'RESIZE_STRATEGY'
);
