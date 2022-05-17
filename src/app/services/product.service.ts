import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }
  getProducts():Observable<Product[]>{
    return this.http.get<Product[]>(environment.host+"/products");
  }
  deleteProduct(product:Product):Observable<void>{
    return this.http.delete<void>(environment.host+"/products/"+product.id)
  }
  getProduct(id:number):Observable<Product>{
    return this.http.get<Product>(environment.host+"/products/"+id)
  }
  updateProduct(p:Product){
    return this.http.put<Product>(environment.host+"/products/"+p.id,p)
  }
}
