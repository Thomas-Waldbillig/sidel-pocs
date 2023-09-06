import { Route } from '@angular/router';
import { LayoutComponent } from '@sidel-pocs/ui-components';

export const appRoutes: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
  {
    path: '',
    component: LayoutComponent,
    children: [{ path: '**', loadComponent: () => import('./dashboard-page') }],
  },
  { path: '**', redirectTo: 'dashboard' },
];
