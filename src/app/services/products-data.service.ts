import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsDataService {
  url = "https://dummyjson.com/products";
  constructor(private http:HttpClient) { }
  getProducts(){
    return this.http.get(this.url);
  }
}
