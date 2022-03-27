import { Pipe, PipeTransform } from '@angular/core';
/*
 * Return square root of an number
 * Usage:
 *   value | squareRoot
 * Example:
 *   {{ 2 | squareRoot }}
 *   formats to: 4
*/
@Pipe({name: 'squareRoot'})
export class SquareRootPipe implements PipeTransform {
  transform(value: number): number {
    return value * value;
  }
}