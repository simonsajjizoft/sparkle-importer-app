import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'CustomDatePipe'
})
export class CustomDatePipe implements PipeTransform {
  day: any;
  month: any;
  minutes: any;
  hours: any;
  dateFrom: any;
  days: string;

  transform(date: any, arg: any) {
    let date1 = new Date().getTime();
    let date2 = new Date(date).getTime();
    let dates = new Date(Date.now());
    let now = new Date(date);
    let fromTime = new Date(dates.toISOString());
    let hoursDiff = Math.abs(now.getTime() - fromTime.getTime()) / 3600000;
    hoursDiff = Math.round((hoursDiff));
    let timeInMilisec = date1 - date2;
    let daysBetweenDates = Math.ceil(timeInMilisec / 86400000);
    if(hoursDiff === 0){
      let minuteDifference = Math.abs(now.getTime() - fromTime.getTime()) / (1000 * 60) % 60;
      minuteDifference = Math.round((minuteDifference));
      if(minuteDifference === 0) this.days = 'Just Now';
      else this.days = `${minuteDifference} minutes `;
    } else {
      if (hoursDiff < 24 && hoursDiff === 1) this.days = `${hoursDiff} hour `;
      else if (hoursDiff < 24 && hoursDiff !== 1) this.days = `${hoursDiff} hours `;
      else if (daysBetweenDates === 1) this.days = `${daysBetweenDates} day `;
      else if (daysBetweenDates > 1 && daysBetweenDates < 7) this.days = `${daysBetweenDates} days `;
      else if (daysBetweenDates >= 7 && daysBetweenDates < 14) this.days = `1 week `;
      else if (daysBetweenDates >= 14 && daysBetweenDates < 21) this.days = `2 weeks `;
      else if (daysBetweenDates >= 21 && daysBetweenDates < 28) this.days = `3 weeks `;
      else if (daysBetweenDates >= 28 && daysBetweenDates < 31) this.days = `4 weeks `;
      else if (daysBetweenDates >= 31 && daysBetweenDates < 62) this.days = `1 month `;
      else if (daysBetweenDates >= 62 && daysBetweenDates < 365) this.days = `months `;
      else if (daysBetweenDates >= 365) this.days = `1 year `;
    }
    return this.days;
  }
}