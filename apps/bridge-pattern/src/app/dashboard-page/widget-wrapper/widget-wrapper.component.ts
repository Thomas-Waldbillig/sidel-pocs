import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  HostBinding,
  Input,
  OnInit,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Widget } from '../../models';
import { WidgetDirective } from '../../shared/directives/widget.directive';
import { WidgetOneComponent, WidgetTwoComponent } from '../widgets';

@Component({
  selector: 'sp-widget-wrapper',
  standalone: true,
  imports: [WidgetOneComponent, CommonModule, MatCardModule, MatButtonModule],
  template: `
    <mat-card>
      <mat-card-header>
        <mat-card-title>{{ widget.label }}</mat-card-title>
        <mat-card-subtitle>subtitle</mat-card-subtitle>
      </mat-card-header>

      <mat-card-content>
        <ng-content />
      </mat-card-content>

      <mat-card-actions align="end">
        <button mat-raised-button color="primary">Ok</button>
      </mat-card-actions>
    </mat-card>
  `,
  styleUrls: ['./widget-wrapper.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WidgetWrapperComponent implements OnInit {
  // DEPENDENCY INJECTIONS

  // ...

  // VARIABLES

  @HostBinding('style.--height-span')
  protected get heightSpan(): number {
    return this.widget.position.height;
  }

  @HostBinding('style.--width-span')
  protected get widthSpan(): number {
    return this.widget.position.width;
  }

  @Input({ required: true })
  public widget!: Widget;

  // @ContentChild(RESIZABLE_WIDGET, { static: true })
  @ContentChild(WidgetOneComponent, { static: true })
  public test1!: WidgetDirective;

  @ContentChild(WidgetTwoComponent, { static: true })
  public test2!: WidgetDirective;

  // LIFECYCLE HOOKS

  // ...

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  public ngOnInit(): void {
    console.log(this.test1);
    console.log(this.test2);
  }
}
