
import { Component, OnInit, OnChanges, SimpleChanges, DoCheck } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductsDataService } from 'src/app/services/products-data.service';
import { ProductModel } from 'src/app/models/product-model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnChanges, DoCheck {
  productsData: ProductModel[] = [];
  filteredProducts: ProductModel[] = [];

  showPopup: boolean = false;
  selectedProduct!: ProductModel;

  constructor(
    private productDataService: ProductsDataService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
      console.log("hello");
  }

  ngDoCheck(): void {
      this.filteredProducts = this.productDataService.getProducts();
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

  ngOnInit(): void {
    // Fetch products from service and update the component state
    this.productDataService.fetchProducts().subscribe(
      products => {
        this.productsData = products;
        this.filteredProducts = this.productsData;

        // Apply any filters from query params
        this.route.queryParams.subscribe(params => {
          this.filterProducts(params['search'] || '');
        });
      },
      error => {
        console.error('Error fetching data', error);
      }
    );
  }

  setProductId(id: string): void {
    this.router.navigate(["/admin/update"], {
      relativeTo: this.route,
      queryParams: { search: id },
      queryParamsHandling: 'merge'
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
