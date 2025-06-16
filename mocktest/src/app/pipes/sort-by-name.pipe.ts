import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortByName',
})
export class SortByNamePipe implements PipeTransform {
  transform(value: string[]): string[] {
    console.log("value: ",value)
     if (!Array.isArray(value)) return [];
    return [...value].sort((a, b) => a.localeCompare(b));
  }
}
