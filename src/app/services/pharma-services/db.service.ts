import { Injectable } from '@angular/core';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  constructor(private db: NgxIndexedDBService){}

  add(values): Observable<any>{
    return this.db.add('PharmaStore', {
      values
    })
  } 

  get(id): Observable<any>{
    return this.db.getByKey('PharmaStore', id);
  }

  update(values, id): Observable<any>{
    return this.db
    .update('PharmaStore', {
      id: id, values
    })    
  }

  delete(id): Observable<any>{
    return this.db.delete('PharmaStore', id);
  }

  getAll(): Observable<any>{
    return this.db.getAll('PharmaStore');
  }
}
