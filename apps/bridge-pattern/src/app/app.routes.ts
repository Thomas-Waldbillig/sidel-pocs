import { Route } from '@angular/router';
import { LayoutComponent } from './shared/layout/layout.component';

export const appRoutes: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
  {
    path: '',
    component: LayoutComponent,
    children: [{ path: '**', loadComponent: () => import('./dashboard-page') }],
  },
  { path: '**', redirectTo: 'dashboard' },
];
