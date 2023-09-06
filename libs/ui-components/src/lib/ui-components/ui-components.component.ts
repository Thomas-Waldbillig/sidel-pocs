import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'sidel-pocs-ui-components',
  standalone: true,
  imports: [CommonModule],
  template: `<p>ui-components works!</p>`,
  styleUrls: ['./ui-components.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiComponentsComponent {}
