import { Pipe, PipeTransform } from '@angular/core';
import { constantCase } from 'change-case';

@Pipe({ name: 'constantCase', standalone: true })
export class ConstantCasePipe implements PipeTransform {
  public transform(value: string): string {
    return constantCase(value);
  }
}
