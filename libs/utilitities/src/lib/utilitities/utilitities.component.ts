import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'sidel-pocs-utilitities',
  standalone: true,
  imports: [CommonModule],
  template: `<p>utilitities works!</p>`,
  styleUrls: ['./utilitities.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UtilititiesComponent {}
