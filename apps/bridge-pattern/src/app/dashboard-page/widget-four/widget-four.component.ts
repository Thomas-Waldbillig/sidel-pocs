import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'sidel-pocs-widget-four',
  standalone: true,
  imports: [CommonModule],
  template: `<p>widget-four works!</p>`,
  styleUrls: ['./widget-four.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WidgetFourComponent {}
