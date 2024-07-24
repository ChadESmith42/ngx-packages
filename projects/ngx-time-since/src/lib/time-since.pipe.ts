import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeSince',
  standalone: true
})
export class TimeSincePipe implements PipeTransform {
  private readonly MINUTE: number = 60 * 1000;
  private readonly HOUR: number = this.MINUTE * 60;
  private readonly DAY: number = this.HOUR * 24;
  private readonly WEEK: number = this.DAY * 7;
  private readonly MONTH: number = this.DAY * 30;
  private readonly YEAR: number = this.DAY * 365;

  transform(value: Date | string): string {
    if(Number.isNaN(new Date(value).getTime())) return 'Unknown';

    if(typeof value === 'string') {
      value = new Date(value);
    }

    const difference = new Date().getTime() - value.getTime();
    if (difference < 1) return 'Date is in the future.';

    if(difference < this.MINUTE) {
      return `a few moments ago`;
    } else if(difference < this.HOUR) {
      const minutes = Math.floor(difference / this.MINUTE);
      return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
    } else if(difference < this.DAY) {
      const hours = Math.floor(difference / this.HOUR);
      return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    } else if(difference < this.WEEK) {
      const days = Math.floor(difference / this.DAY);
      return `${days} day${days > 1 ? 's' : ''} ago`;
    } else if(difference < this.MONTH) {
      const weeks = Math.floor(difference / this.WEEK);
      return `${weeks} week${weeks > 1 ? 's' : ''} ago`;
    } else if(difference < this.YEAR) {
      const months = Math.floor(difference / this.MONTH);
      return `${months} month${months > 1 ? 's' : ''} ago`;
    } else {
      const years = Math.floor(difference / this.YEAR);
      return `${years} year${years > 1 ? 's' : ''} ago`;
    }
  }
}
