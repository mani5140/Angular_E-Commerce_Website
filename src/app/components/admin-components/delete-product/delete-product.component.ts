import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsDataService } from 'src/app/services/products-data.service';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent {
  productId: string = '';

  constructor(
    private productService: ProductsDataService,
    private router: Router
  ) {}

  onDelete(): void {
    this.productService.deleteProduct(this.productId);
    this.router.navigate(['/products']);
  }
}
