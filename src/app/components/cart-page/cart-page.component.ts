import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { ProductSchema } from 'src/app/models/MProduct-model';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent {
  

cartItems: { product: ProductSchema; quantity: number }[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
  }

  increaseQuantity(product: ProductSchema) {
    this.cartService.increaseQuantity(product);
  }

  decreaseQuantity(product: ProductSchema) {
    this.cartService.decreaseQuantity(product);
  }
  removeAll(){
    this.cartService.clearCart();
    window.alert("Removed All !!! ");
  }
}