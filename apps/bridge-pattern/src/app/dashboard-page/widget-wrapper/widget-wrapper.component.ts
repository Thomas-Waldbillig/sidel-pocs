import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'sidel-pocs-widget-wrapper',
  standalone: true,
  imports: [CommonModule],
  template: `<p>widget-wrapper works!</p>`,
  styleUrls: ['./widget-wrapper.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WidgetWrapperComponent {}
