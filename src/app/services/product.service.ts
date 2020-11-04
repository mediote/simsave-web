import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  //private readonly baseUrl = 'https://teste-simsave.getsandbox.com:443/home';
  private readonly baseUrl = 'https://my-json-server.typicode.com/mediote/simsave/products';
  constructor(private http: HttpClient) { }

  list(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }
}
