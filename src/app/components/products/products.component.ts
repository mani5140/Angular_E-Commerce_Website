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

  // data: any;
  productsData: ProductModel[] = [];
  filteredProducts: ProductModel[] = [];

  constructor(
    private productDataService: ProductsDataService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.productDataService.getProducts().subscribe(
      (res: any) => {
        console.log(res.products);
        res.products.forEach((item: any) => {
          this.productsData.push(new ProductModel(
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
            // ? is a optional chaining operator
            item?.images[1] || '',
            item?.images[2] || '',
            item?.images[3] || '',
            ["l","xl","xxl"]
          ));
        });
        
      },
      error => {
        console.error('Error fetching data', error);
      }
    );
  }

  showPopup: boolean = false;
  selectedProduct!: ProductModel;
  //  ! is known as the non-null assertion operator

  showProductDescription(product: ProductModel): void {
    this.showPopup = true;
    this.selectedProduct = product;
  }

  hideProductDescription(): void {
    this.showPopup = false;
  }

}


// import { Component, OnInit, OnChanges, SimpleChanges} from '@angular/core';
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
//         console.log(res.products);
//         res.products.forEach((item: any) => {
//           this.productsData.push(new ProductModel(
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
//             ["l", "xl", "xxl"]
//           ));
//         });
//         // Initialize the filteredProducts array
//         this.filteredProducts = this.productsData;
//         // Subscribe to query parameters and filter products based on the search query
//         this.route.queryParams.subscribe(params => {
//           const searchQuery = params['search'] || '';
//           this.filterProducts(searchQuery);
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
//       this.filteredProducts = this.productsData.filter(product =>
//         product.brand_name.toLowerCase().includes(query.toLowerCase()) ||
//         product.description.toLowerCase().includes(query.toLowerCase())
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

