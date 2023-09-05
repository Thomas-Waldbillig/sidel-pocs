import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'sp-widget-wrapper',
  standalone: true,
  imports: [CommonModule],
  template: `<p>widget-wrapper works!</p>`,
  styleUrls: ['./widget-wrapper.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WidgetWrapperComponent {}
