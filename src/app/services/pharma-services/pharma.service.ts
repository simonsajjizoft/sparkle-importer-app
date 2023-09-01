import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PharmaService {
  newProduct: BehaviorSubject<any> = new BehaviorSubject({});
  addChild: BehaviorSubject<any> = new BehaviorSubject('');
  formValues: BehaviorSubject<any> = new BehaviorSubject({});
  returnFormValues: BehaviorSubject<any> = new BehaviorSubject(false);
  resetFormValue : BehaviorSubject<any> = new BehaviorSubject(false);
  removeItems : BehaviorSubject<any> = new BehaviorSubject(false);
  completeClickStatus : BehaviorSubject<any> = new BehaviorSubject(false);
  completeDataEntity : BehaviorSubject<any> = new BehaviorSubject({});
  selectedData: BehaviorSubject<any> = new BehaviorSubject({});
  productIds: BehaviorSubject<any> = new BehaviorSubject('');
  productId: BehaviorSubject<any> = new BehaviorSubject('');
  private subjectdata = new Subject();
  subjectValue$ = this.subjectdata.asObservable();
  private productdata = new Subject();
  productValue$ = this.productdata.asObservable();
  filledTreeFormData : [];
  form: BehaviorSubject<any> = new BehaviorSubject(false);
  node: BehaviorSubject<any> = new BehaviorSubject({});
  nodeChangeHandler : BehaviorSubject<any> = new BehaviorSubject({});
  viewChanged: any = new BehaviorSubject({});
  
  constructor() { }

  saveForm() : void {
    this.form.next(true);
  }

  viewChange(data): void{
    this.viewChanged.next(data);
  }

  keepNodeData(data):void {
    this.node.next(data);
  }

  nodeChange(data):void {
    this.nodeChangeHandler.next(data);
  }

  addProduct(item): void{
    this.newProduct.next(item);
  }

  setClickEvent(value1, value2) {
    this.subjectdata.next(value1);
    this.productdata.next(value2);
  }

  childLevelAdd(child): void{
    this.addChild.next(child);
  }

  getFormValues(val): void{
    this.returnFormValues.next(val);
  }

  valuesForm(val): void{
    this.formValues.next(val);
  }

  completeClick(val): void{
    this.completeClickStatus.next(val);
  }

  completeData(data): void {
    this.completeDataEntity.next(data)
  }

  resetForm(val):void{
  this.resetFormValue.next(val);
  }

  removeItem(val){
   this.removeItems.next(val)
  }

  setSelectedValues(val){
  this.selectedData.next(val)
  }

  sendProductIdToForm(val) {
  this.productIds.next(val);
  }

  getProductId(id): void{
    this.productId.next(id);
  }

  set treeFormData(data :any)  {
    this.filledTreeFormData = data;
  }
  get treeFormData (){
    return this.filledTreeFormData;
  } 

  getSearchCriteria():object{
    let cstring = sessionStorage.getItem("sp_dimension");
    if(cstring){
      return JSON.parse(cstring);
    }
    return {};
  }
  
}

