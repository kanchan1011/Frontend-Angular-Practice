import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitlize',
})
export class CapitlizePipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return 'null';
    else {
      const uppercase = value.toUpperCase();
      return uppercase;
    }
  }
}
