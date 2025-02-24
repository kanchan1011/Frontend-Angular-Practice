import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormat',
  standalone: true,
})
export class DateFormatPipe implements PipeTransform {
  transform(value: string | Date, format: string = 'MM/DD/YYYY'): string {
    if (!value) return '';

    const date = new Date(value);

    let day: any = date.getDate();
    let month: any = date.getMonth() + 1; //moths are 0 based
    const year = date.getFullYear();

    // Format day and month to be two digits
    if (day < 10) day = '0' + day;

    if (month < 10) month = '0' + month;

    // Return the formatted date string based on the chosen format
    switch (format) {
      case 'MM/DD/YYYY':
        return `${month}/${day}/${year}`;
      case 'DD/MM/YYYY':
        return `${day}/${month}/${year}`;
      case 'YYYY/MM/DD':
        return `${year}/${month}/${day}`;
      default:
        return `${month}/${day}/${year}`;
    }
  }
}
