import { InjectionToken } from '@angular/core';
import { WidgetPosition } from '../base.behavior';

export interface Resizable {
  updateSize: (position: WidgetPosition) => void;
  resetSize: () => void;
}

export const RESIZABLE = new InjectionToken<Resizable>('RESIZABLE');
