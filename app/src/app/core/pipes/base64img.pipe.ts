import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'base64img'
})
export class Base64imgPipe implements PipeTransform {

  transform(value: string, args?: any): any {

    if (value.includes('data:image/png;base64,')) {
      return value;
    }
      
    return 'data:image/png;base64,' + value;
  }

}
