import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'sp-widget-three',
  standalone: true,
  imports: [CommonModule],
  template: `<p>widget-three works!</p>`,
  styleUrls: ['./widget-three.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WidgetThreeComponent {}
