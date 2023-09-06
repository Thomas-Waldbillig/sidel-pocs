import { InjectionToken } from '@angular/core';
import { RefreshStrategy } from './refreshable.strategies';

export type RefreshableWidget = { refreshStrategy: RefreshStrategy };

export const REFRESHABLE_WIDGET = new InjectionToken<RefreshableWidget>(
  'REFRESHABLE_WIDGET'
);
