import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpApiService {

  constructor(private http: HttpClient) { }
  setHeaders(){
    let header = new HttpHeaders();
    header = header.set('','');
    return header;
  }
  post(url, data): Observable<any>{
    return this.http.post(url, data,{headers:this.setHeaders()});
  }
}
