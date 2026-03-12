import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replaceLongStrings',
  standalone: false
})
export class ReplaceLongStringsPipe implements PipeTransform {

  transform(value: string | null, ...args: unknown[]): string | null {
    let copyString = ''
    if (value) {
      if (value.length > 30) {
        copyString += value.slice(0, 30);
        copyString += '...';
      }
    }
    return copyString
  }
}
