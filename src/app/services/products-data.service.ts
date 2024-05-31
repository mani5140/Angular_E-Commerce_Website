// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { ProductModel } from '../models/product-model';

// @Injectable({
//   providedIn: 'root'
// })
// export class ProductsDataService {
//   url = "https://dummyjson.com/products";

//   constructor(private http: HttpClient) { }
//   private productsData: ProductModel[] = [
//     // Initial products can be loaded here
//   ];


  
//   getProducts() {
//     return this.http.get(this.url);
//   }

//   createProduct(product: ProductModel): void {
//     this.productsData.push(product);
//   }

//   updateProduct(updatedProduct: ProductModel): void {
//     const index = this.productsData.findIndex(product => product.id === updatedProduct.id);
//     if (index !== -1) {
//       this.productsData[index] = updatedProduct;
//     }
//   }

//   deleteProduct(productId: string): void {
//     this.productsData = this.productsData.filter(product => product.id !== productId);
//   }

// }

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductModel } from '../models/product-model';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductsDataService {
  private url = "https://dummyjson.com/products";
  private productsData: ProductModel[] = [];
  private productsSubject = new BehaviorSubject<ProductModel[]>(this.productsData);

  constructor(private http: HttpClient) { }

  fetchProducts(): Observable<ProductModel[]> {
    return this.http.get<any>(this.url).pipe(
      map(res => {
        const products = res.products.map((item: any) => new ProductModel(
          item.id.toString(),
          item.brand,
          item.description,
          item.rating.toString(),
          item.price,
          item.discountPercentage,
          item.stock,
          item.thumbnail,
          item.returnPolicy,
          item.availabilityStatus,
          item?.images[0] || '',
          item?.images[1] || '',
          item?.images[2] || '',
          item?.images[3] || '',
          ["l", "xl", "xxl"]
        ));
        this.setProducts(products);
        return products;
      })
    );
  }

  getProducts(): Observable<ProductModel[]> {
    return this.productsSubject.asObservable();
  }

  setProducts(products: ProductModel[]): void {
    this.productsData = products;
    this.productsSubject.next(this.productsData);
  }

  createProduct(product: ProductModel): void {
    this.productsData.push(product);
    this.productsSubject.next(this.productsData);
  }

  updateProduct(updatedProduct: ProductModel): void {
    const index = this.productsData.findIndex(product => product.id === updatedProduct.id);
    if (index !== -1) {
      this.productsData[index] = updatedProduct;
      this.productsSubject.next(this.productsData);
    }
  }

  deleteProduct(productId: string): void {
    this.productsData = this.productsData.filter(product => product.id !== productId);
    this.productsSubject.next(this.productsData);
  }
}
