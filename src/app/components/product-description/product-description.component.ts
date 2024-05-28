import { Component,EventEmitter, Input, Output } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { ProductModel } from 'src/app/models/product-model';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css']
})
export class ProductDescriptionComponent {

  @Input() showPopup: boolean = false;
  @Input() selectedProduct!: ProductModel;
  @Output() close: EventEmitter<any> = new EventEmitter<any>();

  constructor(private cartService: CartService) {}
  addToCart() {
    window.alert("Product added to cart !!!")
    this.cartService.addToCart(this.selectedProduct);
  }
  
}
