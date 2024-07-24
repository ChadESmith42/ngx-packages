import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age',
  standalone: true
})
export class AgePipe implements PipeTransform {

  transform(value: Date | string): number {
    if(Number.isNaN(new Date(value).getTime())) return 0;

    const now: Date = new Date();
    if (typeof value === 'string') {
      value = new Date(value);
    }
    if(value.getTime() > now.getTime()) return 0;

    let age = now.getFullYear() - value.getFullYear();
    if(now.getMonth() >= value.getMonth() && now.getDate() >= value.getDate()) {
      age += 1;
    }
    return age;
  }

}
