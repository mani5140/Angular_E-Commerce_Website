
// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { ProductModel } from '../models/product-model';
// import { Observable } from 'rxjs';
// import { map } from 'rxjs/operators';

// @Injectable({
//   providedIn: 'root'
// })
// export class ProductsDataService {

//   private url = "https://dummyjson.com/products";
//   public productsData: ProductModel[] = [];

//   constructor(private http: HttpClient) { }

//   fetchProducts(): Observable<ProductModel[]> {
//     return this.http.get<any>(this.url).pipe(
//       map(res => {
//         const products = res.products.map((item: any) => new ProductModel(
//           item.id.toString(),
//           item.brand,
//           item.description,
//           item.rating.toString(),
//           item.price,
//           item.discountPercentage,
//           item.stock,
//           item.thumbnail,
//           item.returnPolicy,
//           item.availabilityStatus,
//           item?.images[0] || '',
//           item?.images[1] || '',
//           item?.images[2] || '',
//           item?.images[3] || '',
//           ["l", "xl", "xxl"]
//         ));
//         this.setProducts(products);
//         return products;
//       })
//     );
//   }

//   getProducts(): ProductModel[] {
//     return this.productsData;
//   }

//   setProducts(products: ProductModel[]): void {
//     this.productsData = products;
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
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductsDataService {
  private url = "https://dummyjson.com/products";
  private productsData: ProductModel[] = [];
  private dataLoaded = false;

  constructor(private http: HttpClient) { }

  fetchProducts(): Observable<ProductModel[]> {
    if (this.dataLoaded) {
      return of(this.productsData);
    } else {
      return this.http.get<{ products: any[] }>(this.url).pipe(
        map(res => res.products.map(item => new ProductModel(
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
        ))),
        tap(products => {
          this.productsData = products;
          this.dataLoaded = true;
        })
      );
    }
  }

  getProducts(): ProductModel[] {
    return this.productsData;
  }

  setProducts(products: ProductModel[]): void {
    this.productsData = products;
    this.dataLoaded = true;
  }

  createProduct(product: ProductModel): void {
    this.productsData.push(product);
  }

  updateProduct(updatedProduct: ProductModel): void {
    const index = this.productsData.findIndex(product => product.id === updatedProduct.id);
    if (index !== -1) {
      this.productsData[index] = updatedProduct;
    }
  }

  deleteProduct(productId: string): void {
    this.productsData = this.productsData.filter(product => product.id !== productId);
  }
}

