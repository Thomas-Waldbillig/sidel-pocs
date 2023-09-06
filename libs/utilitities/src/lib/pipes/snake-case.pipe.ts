import { Pipe, PipeTransform } from '@angular/core';
import { snakeCase } from 'change-case';

@Pipe({ name: 'snakeCase', standalone: true })
export class SnakeCasePipe implements PipeTransform {
  public transform(value: string): string {
    return snakeCase(value);
  }
}
