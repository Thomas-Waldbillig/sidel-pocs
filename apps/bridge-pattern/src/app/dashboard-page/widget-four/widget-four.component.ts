import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'sp-widget-four',
  standalone: true,
  imports: [CommonModule],
  template: `<p>widget-four works!</p>`,
  styleUrls: ['./widget-four.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WidgetFourComponent {}
