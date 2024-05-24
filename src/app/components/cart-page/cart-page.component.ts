import { Component } from '@angular/core';
import { productsSchema } from 'src/app/interfaces/productInterface';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent {
  

cartItems: { product: productsSchema; quantity: number }[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
  }

  increaseQuantity(product: productsSchema) {
    this.cartService.increaseQuantity(product);
  }

  decreaseQuantity(product: productsSchema) {
    this.cartService.decreaseQuantity(product);
  }
}