import { Pipe, PipeTransform } from '@angular/core';
import {DatePipe} from "@angular/common";

@Pipe({
  name: 'myDateFormat'
})
export class MyDateFormatPipe implements PipeTransform {

  transform(value: string, format: string): string {
    if(typeof value === 'string') {
      return new DatePipe('fi').transform(value, format);
    }

    return '';
  }

}
