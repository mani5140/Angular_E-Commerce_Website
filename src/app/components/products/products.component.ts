// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// import { ProductsDataService } from 'src/app/services/products-data.service';
// import { ProductModel } from 'src/app/models/product-model';
// @Component({
//   selector: 'app-products',
//   templateUrl: './products.component.html',
//   styleUrls: ['./products.component.css']
// })
// export class ProductsComponent implements OnInit {
//   productsData: ProductModel[] = [];
//   filteredProducts: ProductModel[] = [];

//   constructor(
//     private productDataService: ProductsDataService,
//     private route: ActivatedRoute
//   ) { }

//   ngOnInit(): void {
//     this.productDataService.getProducts().subscribe(
//       (res: any) => {
//         res.products.forEach((item: any) => {
//           const product = new ProductModel(
//             item.id.toString(),
//             item.brand,
//             item.description,
//             item.rating.toString(),
//             item.price,
//             item.discountPercentage,
//             item.stock,
//             item.thumbnail,
//             item.returnPolicy,
//             item.availabilityStatus,
//             item?.images[0] || '',
//             item?.images[1] || '',
//             item?.images[2] || '',
//             item?.images[3] || '',
//             ["l","xl","xxl"]
//           );
//           this.productsData.push(product);
//         });
//         this.filteredProducts = this.productsData;
//         this.route.queryParams.subscribe(params => {
//           this.filterProducts(params['search'] || '');
//         });
//       },
//       error => {
//         console.error('Error fetching data', error);
//       }
//     );
//   }

//   filterProducts(query: string): void {
//     if (!query) {
//       this.filteredProducts = this.productsData;
//     } else {
//       const lowerCaseQuery = query.toLowerCase();
//       this.filteredProducts = this.productsData.filter(product =>
//         (product.brand_name && product.brand_name.toLowerCase().includes(lowerCaseQuery)) ||
//         (product.description && product.description.toLowerCase().includes(lowerCaseQuery))
//       );
//     }
//   }

//   showPopup: boolean = false;
//   selectedProduct!: ProductModel;

//   showProductDescription(product: ProductModel): void {
//     this.showPopup = true;
//     this.selectedProduct = product;
//   }

//   hideProductDescription(): void {
//     this.showPopup = false;
//   }
// }


import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsDataService } from 'src/app/services/products-data.service';
import { ProductModel } from 'src/app/models/product-model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  productsData: ProductModel[] = [];
  filteredProducts: ProductModel[] = [];

  showPopup: boolean = false;
  selectedProduct!: ProductModel;

  constructor(
    private productDataService: ProductsDataService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    // Fetch products from service and update the component state
    this.productDataService.fetchProducts().subscribe(
      products => {
        this.productDataService.setProducts(products);
      },
      error => {
        console.error('Error fetching data', error);
      }
    );

    // Subscribe to the products observable to get updates
    this.productDataService.getProducts().subscribe(products => {
      this.productsData = products;
      this.filteredProducts = this.productsData;
      console.log(this.productsData);

      // Apply any filters from query params
      this.route.queryParams.subscribe(params => {
        this.filterProducts(params['search'] || '');
      });
    });
  }

  filterProducts(query: string): void {
    if (!query) {
      this.filteredProducts = this.productsData;
    } else {
      const lowerCaseQuery = query.toLowerCase();
      this.filteredProducts = this.productsData.filter(product =>
        (product.brand_name && product.brand_name.toLowerCase().includes(lowerCaseQuery)) ||
        (product.description && product.description.toLowerCase().includes(lowerCaseQuery))
      );
    }
  }

  showProductDescription(product: ProductModel): void {
    this.showPopup = true;
    this.selectedProduct = product;
  }

  hideProductDescription(): void {
    this.showPopup = false;
  }
}
