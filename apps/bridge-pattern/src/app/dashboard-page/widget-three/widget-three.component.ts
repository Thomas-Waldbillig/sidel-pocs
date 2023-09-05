import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'sidel-pocs-widget-three',
  standalone: true,
  imports: [CommonModule],
  template: `<p>widget-three works!</p>`,
  styleUrls: ['./widget-three.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WidgetThreeComponent {}
