import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Product from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // private readonly baseUrl = 'https://teste-simsave.getsandbox.com:443/home';
  private readonly baseUrl = 'https://my-json-server.typicode.com/mediote/simsave/products';

  constructor(private http: HttpClient) { }

  list(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl);
  }
}
