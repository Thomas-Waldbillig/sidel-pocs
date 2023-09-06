import { Pipe, PipeTransform } from '@angular/core';
import { camelCase } from 'change-case';

@Pipe({ name: 'camelCase', standalone: true })
export class CamelCasePipe implements PipeTransform {
  public transform(value: string): string {
    return camelCase(value);
  }
}
