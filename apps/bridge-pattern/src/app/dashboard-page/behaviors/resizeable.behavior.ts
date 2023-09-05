import { InjectionToken } from '@angular/core';
import { WidgetPosition } from './base.behavior';

export interface ResizableWidget {
  updateSize: (position: WidgetPosition) => void;
  resetSize: () => void;
}

export const RESIZABLE_WIDGET = new InjectionToken<ResizableWidget>(
  'RESIZABLE_WIDGET'
);
