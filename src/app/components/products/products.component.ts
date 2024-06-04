
import {
  Component,
  OnInit,
  OnChanges,
  SimpleChanges,
  DoCheck,
} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductsDataService } from 'src/app/services/products-data.service';
import { ProductModel } from 'src/app/models/product-model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit{
  productsData: ProductModel[] = [];
  filteredProducts: ProductModel[] = [];
  showPopup: boolean = false;
  selectedProduct!: ProductModel;
  private dataLoaded = false;

  constructor(
    private productDataService: ProductsDataService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  filterProducts(query: string): void {
    if (!query) {
      this.filteredProducts = this.productsData;
    } else {
      const lowerCaseQuery = query.toLowerCase();
      this.filteredProducts = this.productsData.filter(
        (product) =>
          (product.brand_name &&
            product.brand_name.toLowerCase().includes(lowerCaseQuery)) ||
          (product.description &&
            product.description.toLowerCase().includes(lowerCaseQuery))
      );
    }
  }

  ngOnInit(): void {
    this.filteredProducts = this.productDataService.getProducts(); 

    this.productDataService.fetchProducts().subscribe(
      (products) => {
        this.productsData = products;
        this.filteredProducts = this.productsData;
        console.log(this.filteredProducts);
      },
      (error) => {
        console.error('Error fetching data', error);
      }
    );

    // search condition
    this.route.queryParams.subscribe((params) => {
      this.filterProducts(params['search'] || '');
    });
}

  setProductId(id: string): void {
    this.router.navigate(['/update'], {
      relativeTo: this.route,
      queryParams: { search: id },
      queryParamsHandling: 'merge',
    });
  }

  deleteProduct(id: string): void {
    this.productDataService.deleteProduct(id);
  }

  showProductDescription(product: ProductModel): void {
    this.showPopup = true;
    this.selectedProduct = product;
  }

  hideProductDescription(): void {
    this.showPopup = false;
  }
}




// import {
//   Component,
//   OnInit,
//   OnChanges,
//   SimpleChanges,
//   DoCheck,
// } from '@angular/core';
// import { Router, ActivatedRoute } from '@angular/router';
// import { ProductsDataService } from 'src/app/services/products-data.service';
// import { ProductModel } from 'src/app/models/product-model';
// import { Observable, of } from 'rxjs';
// import { map, tap } from 'rxjs/operators';

// @Component({
//   selector: 'app-products',
//   templateUrl: './products.component.html',
//   styleUrls: ['./products.component.css'],
// })
// export class ProductsComponent implements OnInit, DoCheck {
//   productsData: ProductModel[] = [];
//   filteredProducts: ProductModel[] = [];
//   showPopup: boolean = false;
//   selectedProduct!: ProductModel;


//   constructor(
//     private productDataService: ProductsDataService,
//     private route: ActivatedRoute,
//     private router: Router
//   ) { }

//   // ngOnChanges(changes: SimpleChanges): void {
//   //   console.log("hello");
//   //   let flag = this.productDataService.change;
//   //   let change = changes[flag];
//   //   if (!change.firstChange) {
//   //     this.filteredProducts = this.productDataService.productsData;
//   //   }

//   // }

//   ngDoCheck(): void{
//     console.log(this.filteredProducts);
//   }

//   filterProducts(query: string): void {
//     if (!query) {
//       this.filteredProducts = this.productsData;
//     } else {
//       const lowerCaseQuery = query.toLowerCase();
//       this.filteredProducts = this.productsData.filter(
//         (product) =>
//           (product.brand_name &&
//             product.brand_name.toLowerCase().includes(lowerCaseQuery)) ||
//           (product.description &&
//             product.description.toLowerCase().includes(lowerCaseQuery))
//       );
//     }
//   }

//   ngOnInit(): void {

//     this.filteredProducts = this.productDataService.productsData;
//     console.log(this.filteredProducts);

//     if (!this.productDataService.dataLoaded) {
//       console.log("im called if")
//       this.productDataService.fetchProducts().subscribe(
//         (res: any) => {
//           res.products.forEach((item: any) => {
//             const product = new ProductModel(
//               item.id.toString(),
//               item.brand,
//               item.description,
//               item.rating.toString(),
//               item.price,
//               item.discountPercentage,
//               item.stock,
//               item.thumbnail,
//               item.returnPolicy,
//               item.availabilityStatus,
//               item?.images[0] || '',
//               item?.images[1] || '',
//               item?.images[2] || '',
//               item?.images[3] || '',
//               ["l", "xl", "xxl"]
//             );
//             this.productsData.push(product);
//           });
//           this.productDataService.dataLoaded = true;
//           this.productDataService.setProducts(this.productsData);
//           // this.filteredProducts = this.productDataService.productsData;
//         },
//         error => {
//           console.error('Error fetching data', error);
//         }
//       );
//     }
//     // this.filteredProducts = this.productDataService.getProducts();

//     this.route.queryParams.subscribe(params => {
//       this.filterProducts(params['search'] || '');
//     });
//   }

//   setProductId(id: string): void {
//     this.router.navigate(['/update'], {
//       relativeTo: this.route,
//       queryParams: { search: id },
//       queryParamsHandling: 'merge',
//     });
//   }

//   deleteProduct(id: string): void {
//     this.productDataService.deleteProduct(id);
//   }

//   showProductDescription(product: ProductModel): void {
//     this.showPopup = true;
//     this.selectedProduct = product;
//   }

//   hideProductDescription(): void {
//     this.showPopup = false;
//   }
// }



// //   ngOnInit(): void {
//   //     this.filteredProducts = this.productDataService.getProducts();
//   //     this.productDataService.fetchProducts().subscribe(
//   //       (products) => {
//   //         this.productsData = products;
//   //         this.filteredProducts = this.productsData;
//   //         console.log(this.filteredProducts);
//   //       },
//   //       (error) => {
//   //         console.error('Error fetching data', error);
//   //       }
//   //     );

//   //     // search condition
//   //     this.route.queryParams.subscribe((params) => {
//   //       this.filterProducts(params['search'] || '');
//   //     });
//   // }

//   //   ngOnInit(): void {
//   //     this.filteredProducts = this.productDataService.getProducts();
//   //     if (!this.dataLoaded){
//   //           this.productDataService.fetchProducts().subscribe(
//   //             map(res => res.products.map(item => new ProductModel(
//   //               item.id.toString(),
//   //               item.brand,
//   //               item.description,
//   //               item.rating.toString(),
//   //               item.price,
//   //               item.discountPercentage,
//   //               item.stock,
//   //               item.thumbnail,
//   //               item.returnPolicy,
//   //               item.availabilityStatus,
//   //               item?.images[0] || '',
//   //               item?.images[1] || '',
//   //               item?.images[2] || '',
//   //               item?.images[3] || '',
//   //               ["l", "xl", "xxl"]
//   //             ))),
//   //             tap(products => {
//   //               this.productsData = products;
//   //               this.dataLoaded = true;
//   //             })
//   //           );
//   //         }
//   //     this.productDataService.fetchProducts().subscribe(
//   //       (products) => {
//   //         this.productsData = products;
//   //         this.filteredProducts = this.productsData;
//   //         console.log(this.filteredProducts);
//   //       },
//   //       (error) => {
//   //         console.error('Error fetching data', error);
//   //       }
//   //     );

//   //     // search condition
//   //     this.route.queryParams.subscribe((params) => {
//   //       this.filterProducts(params['search'] || '');
//   //     });
//   // }
