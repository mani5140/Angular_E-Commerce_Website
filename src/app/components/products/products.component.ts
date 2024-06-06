import { Component, OnInit } from '@angular/core';
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
  private url = 'https://dummyjson.com/products';

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.filteredProducts = this.productService.productsData;

    if (this.productService.productsData.length < 1) {
      this.productService.fetchProducts(this.url).subscribe(
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
              ['l', 'xl', 'xxl']
            );
            this.productService.productsData.push(product);
          });
        },
        (error) => {
          console.error('Error fetching data', error);
        }
      );
    }

    this.route.queryParams.subscribe((params) => {
      const searchQuery = params['search'];
      if (searchQuery?.length) {
        console.log('I Am Called !!');
        this.filterProducts(searchQuery);
      }
    });
  }

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

  updateProduct(index: number, product: ProductModel): void {
    this.router.navigate(['/update'], {
      relativeTo: this.route,
      queryParams: { productIndex: index, product: JSON.stringify(product) },
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
