import { Injectable } from '@angular/core';
import jwt_decode from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  avilableRoles = ['receiver','register','DC1','DC2','QC','QA','QaPhoto','QaEdit','admin','pharmaDimension','photographer','pharmaPhotographer','release','vendor','pharmaVendor','ivsmSupervisor', 'customerSupport', 'adminViewer', 'ivsmViewer'];
  constructor() { }

  isAuthenticated(){
    let token = localStorage.getItem('userToken');
    if(token === null) return false;
    else {
      let userCheck = false;
      let decodedToken: any = jwt_decode(token);
      decodedToken?.userRoles?.forEach(element => {
      if(this.avilableRoles.includes(element?.role)) userCheck = true;
      });
      if(userCheck) return true;
      else return false;
    }
  }

  getUser(){
    let token = localStorage.getItem('userToken');
    if(token === null) return false;
    else return jwt_decode(token);
  }
  
}
