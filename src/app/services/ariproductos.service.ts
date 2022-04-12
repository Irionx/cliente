import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AriproductosService {
  url ='http://localhost:3000/products/list/'

  constructor(private http: HttpClient) { }
   
   getAriProduct(): Observable<any> {
     return this.http.get(this.url)
      }
}
