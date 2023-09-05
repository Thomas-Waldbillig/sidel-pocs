import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterModule],
  selector: 'sidel-pocs-root',
  template: `<h1>Welcome bridge-pattern</h1>
    <router-outlet></router-outlet>`,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {}
