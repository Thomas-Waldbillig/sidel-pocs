import { InjectionToken } from '@angular/core';

export type RefreshableWidgetConfig = { refresh(): void };

export type RefreshableWidget = { refreshableConfig: RefreshableWidgetConfig };

export const REFRESHABLE_WIDGET = new InjectionToken<RefreshableWidgetConfig>(
  'REFRESHABLE_WIDGET'
);
