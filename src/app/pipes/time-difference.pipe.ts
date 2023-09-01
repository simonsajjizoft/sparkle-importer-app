import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeDifference'
})
export class TimeDifferencePipe implements PipeTransform {
  date1: any;
  date2: any;
  diff: any;
  timeDuration:any;
  transform(value: any,args: any[]): any {  
    this.date1 = new Date(value);
    this.date2 = new Date();  
    let diff = this.date2.getTime() - this.date1.getTime();
    let days = Math.floor(diff / (60 * 60 * 24 * 1000));
    let hours = Math.floor(diff / (60 * 60 * 1000)) - (days * 24);
    let minutes = Math.floor(diff / (60 * 1000)) - ((days * 24 * 60) + (hours * 60));
    let seconds = Math.floor(diff / 1000) - ((days * 24 * 60 * 60) + (hours * 60 * 60) + (minutes * 60));
     if(days>0 )this.timeDuration=`${days} day ${hours} hr `
    //  if(days>0 && hours ==0)this.timeDuration=`${days} day `
     if(days <= 0 && (hours !=0 || hours <= 24))this.timeDuration=`${hours} hr ${minutes} min`
     if(hours ==0 && days <=0 )this.timeDuration=`${minutes} min`
     return this.timeDuration
      
  }

}
