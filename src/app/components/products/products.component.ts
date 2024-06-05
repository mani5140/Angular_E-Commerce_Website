import {
  Component,
  OnInit,
} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { ProductModel } from 'src/app/models/product-model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  productsData: ProductModel[] = [];
  filteredProducts: ProductModel[] = [];
  showPopup: boolean = false;
  selectedProduct!: ProductModel;


  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  filterProducts(query: string): void {

    const lowerCaseQuery = query.toLowerCase();
    this.filteredProducts = this.productService.productsData.filter(
      (product) =>
        (product.brand_name &&
          product.brand_name.toLowerCase().includes(lowerCaseQuery)) ||
        (product.description &&
          product.description.toLowerCase().includes(lowerCaseQuery))
    );

  }

  ngOnInit(): void {

    this.filteredProducts = this.productService.productsData;

    if (this.productService.productsData.length < 1) {

      this.productService.fetchProducts().subscribe(
        (res: any) => {
          res.products.forEach((item: any) => {
            const product = new ProductModel(
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
            );
            this.productService.productsData.push(product);
          });
        },
        error => {
          console.error('Error fetching data', error);
        }
      );
    }

    this.route.queryParams.subscribe(params => {
      const searchQuery = params['search'];
      if (searchQuery?.length) {
        console.log("I Am Called !!");
        this.filterProducts(searchQuery);
      }
    });

  }

  updateProduct(index: number, product: ProductModel): void {
  
    this.router.navigate(['/update'], {
      relativeTo: this.route,
      queryParams: { productIndex: index, product: JSON.stringify(product)},
      queryParamsHandling: 'merge',
    });
  }

  deleteProduct(index: number): void {
    this.productService.deleteProduct(index);
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
// import { ProductService } from 'src/app/services/products-data.service';
// import { ProductModel } from 'src/app/models/product-model';

// @Component({
//   selector: 'app-products',
//   templateUrl: './products.component.html',
//   styleUrls: ['./products.component.css'],
// })
// export class ProductsComponent implements OnInit{
//   productsData: ProductModel[] = [];
//   filteredProducts: ProductModel[] = [];
//   showPopup: boolean = false;
//   selectedProduct!: ProductModel;
//   private dataLoaded = false;

//   constructor(
//     private productDataService: ProductService,
//     private route: ActivatedRoute,
//     private router: Router
//   ) {}

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
//     this.filteredProducts = this.productDataService.getProducts();

//     this.productDataService.fetchProducts().subscribe(
//       (products) => {
//         this.productsData = products;
//         this.filteredProducts = this.productsData;
//         console.log(this.filteredProducts);
//       },
//       (error) => {
//         console.error('Error fetching data', error);
//       }
//     );

//     // search condition
//     this.route.queryParams.subscribe((params) => {
//       this.filterProducts(params['search'] || '');
//     });
// }

//   setProductId(index: number, Pid: string): void {
//     this.router.navigate(['/update'], {
//       relativeTo: this.route,
//       queryParams: { productIndex: index, productId: Pid},
//       queryParamsHandling: 'merge',
//     });
//   }

//   deleteProduct(index: number): void {
//     this.productDataService.deleteProduct(index);
//   }

//   showProductDescription(product: ProductModel): void {
//     this.showPopup = true;
//     this.selectedProduct = product;
//   }

//   hideProductDescription(): void {
//     this.showPopup = false;
//   }
// }



