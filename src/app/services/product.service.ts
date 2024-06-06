import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductModel } from '../models/product-model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  
  productsData: ProductModel[] = [];
  dataLoaded: boolean = false;

  constructor(private http: HttpClient) {}

  fetchProducts(url: string) {
    return this.http.get(url);
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
