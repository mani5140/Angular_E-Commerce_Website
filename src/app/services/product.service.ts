
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductModel } from '../models/product-model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private url = "https://dummyjson.com/products";
  productsData: ProductModel[] = [];
  dataLoaded: boolean = false;

  constructor(private http: HttpClient) { }

  fetchProducts() {
    return this.http.get(this.url);
  }

  getProducts(): ProductModel[] {
    return this.productsData;
  }

  createProduct(product: ProductModel): void {
    this.productsData.push(product);
  }

  updateProduct(updatedProduct: ProductModel, index: number): void {
    
    if (index !== -1) {
      this.productsData[index] = updatedProduct;
    } 
  }

  deleteProduct(index: number): void {
 
    this.productsData.splice(index, 1);
  }
  
}

