import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from '@sidel-pocs/ui-components';

@Component({
  standalone: true,
  imports: [RouterModule, LayoutComponent],
  selector: 'sp-root',
  template: ` <router-outlet /> `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {}
