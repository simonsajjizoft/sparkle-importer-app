import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeDecrease'
})
export class TimeDecreasePipe implements PipeTransform {
  x: any;
  expired: boolean = false;
  timeDiff:any
  transform(value: any,args: any[]): any {    
      let today = new Date(value);
      let tomorrow = new Date(today.getTime()+(24*60*60*1000)).getTime(); 
      let now =  new Date().getTime()
      let diff = tomorrow - now;
      let days=Math.floor(diff / (1000 * 60 * 60 * 24))    
      let hours=Math.floor((diff % (1000 * 60 * 60 * 24) )/(1000 * 60 * 60))
      let mins=Math.floor((diff % (1000 * 60 * 60) )/ ( 1000 * 60))
      let sec =Math.floor((diff % (1000 * 60 ) )/ ( 1000 ))
      this.timeDiff=`${hours} hr ${mins} min.`      
      if(diff<0){       
        this.timeDiff = "time expired"
        this.expired = true
      }
      return this.timeDiff   
  }

}
