import { Pipe, PipeTransform } from '@angular/core';
import { pascalCase } from 'change-case';

@Pipe({ name: 'pascalCase', standalone: true })
export class PascalCasePipe implements PipeTransform {
  public transform(value: string): string {
    return pascalCase(value);
  }
}
