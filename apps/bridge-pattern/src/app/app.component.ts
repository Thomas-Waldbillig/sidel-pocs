import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './shared/layout/layout.component';

@Component({
  standalone: true,
  imports: [RouterModule, LayoutComponent],
  selector: 'sidel-pocs-root',
  template: ` <router-outlet /> `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {}
