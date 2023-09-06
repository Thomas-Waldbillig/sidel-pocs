import { Pipe, PipeTransform } from '@angular/core';
import { paramCase } from 'change-case';

@Pipe({ name: 'paramCase', standalone: true })
export class ParamCasePipe implements PipeTransform {
  public transform(value: string): string {
    return paramCase(value);
  }
}
