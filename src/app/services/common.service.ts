import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  bucketsBarcodes: any = [
    "257061",
    "257062",
    "257063",
    "257064",
    "257065",
    "257066",
    "257067",
    "257068",
    "257069",
    "257070",
    "257071",
    "257072",
    "257073",
    "257074",
    "257075",
    "257076",
    "257077",
    "257078",
    "257079",
    "257080",
    "257081",
    "257082",
    "257083",
    "257084",
    "257085",
    "257086",
    "257087",
    "257088",
    "257089",
    "257090",
    "257091",
    "257092",
    "257093",
    "257094",
    "257095",
    "257096",
    "257097",
    "257098",
    "257099",
    "257000"
  ];
  languageSwitched = new BehaviorSubject({});
  ViewType = new BehaviorSubject<any>(false);
  workOrderAssignTotal: BehaviorSubject<any> = new BehaviorSubject<any>({});
  stationType: BehaviorSubject<any> = new BehaviorSubject<any>({});
  bucketIncidentResolve: BehaviorSubject<any> = new BehaviorSubject<any>({});
  constructor(public translate: TranslateService){
    translate.addLangs(['en']);
    translate.setDefaultLang('en');
  }

  switchLangulage(lan): void{
    this.translate.use('en');
    this.languageSwitched.next({lan: lan});
  }
  setViewType(temp: any): void {
    return this.ViewType.next(temp);
  }

  getViewType() {
    return this.ViewType.asObservable();
  }

   workOrderAssign(status){
    this.workOrderAssignTotal.next(status)
   }

   QaStationType(type){
    this.stationType.next(type)
   }

   bucketIncidentResolved(data){
    this.bucketIncidentResolve.next(data);
   }
}
