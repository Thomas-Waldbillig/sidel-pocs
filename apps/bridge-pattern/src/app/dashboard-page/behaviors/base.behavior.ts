import { InjectionToken } from '@angular/core';

export type BaseWidget = { data: unknown };

export const BASE_WIDGET = new InjectionToken<void>('BASE_WIDGET');
