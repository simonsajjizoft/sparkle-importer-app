import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  authToken: any;

  getToken() {
    if (this.authToken) return this.authToken;
    else {
      let token = localStorage.getItem('userToken');
      if (token === null) return '';
      else return token;
    }
  }

  getLoginToken(){
    let token = localStorage.getItem('LoginToken');
      if (token === null) return '';
      else return token;
  }
  
  setHeaders() {
    let header = new HttpHeaders();
    header = header.set('Authorization', `Bearer ${this.getToken()}`);
    return header;
  }

  setLoginHeaders() {
    let header = new HttpHeaders();
    header = header.set('Authorization', `Bearer ${this.getLoginToken()}`);
    return header;
  }

  imageUpload(url, data): Observable<any> {
    return this.http.post(url, data);
  }

  post(url, data): Observable<any> {
    return this.http.post(url, data, { headers: this.setHeaders() });
  }

  get(url): Observable<any> {
    return this.http.get(url, { headers: this.setHeaders() });
  }

  vendorImageUpload(url, data, options: {}): Observable<any> {
    return this.http.post(url, data, options);
  }

  bulkImageUpload(url, data): Observable<any> {
    // options = {...options, ...{ headers: this.setHeaders()}}
    return this.http.post(url, data, { headers: this.setHeaders() });
  }

  LoginPost(url, data): Observable<any> {
    return this.http.post(url, data, { headers: this.setLoginHeaders() });
  }

  delete(url:any, data:any): Observable<any> {
    // options = {...options, ...{ headers: this.setHeaders()}}
    return this.http.request('delete', url, { body: data})
  }
  put(url:any, data:any): Observable<any> {
    // options = {...options, ...{ headers: this.setHeaders()}}
    return this.http.request('put', url, { body: data})
  }


}
