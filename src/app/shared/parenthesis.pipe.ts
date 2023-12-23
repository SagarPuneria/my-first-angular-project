import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'parenthesis'
})
export class ParenthesisPipe implements PipeTransform {

  transform(value: number | string, parameter?: boolean): string {
    if (value == '') {
      return ''
    } else {
      if (parameter) {
        return '((' + value + '))';
      }
      return '(' + value + ')';
    }
  }

}
