import { Component,SimpleChanges } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { ProductModel } from 'src/app/models/product-model';
import { CartModel } from 'src/app/models/cart-model';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent {
  

cartItems: CartModel[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
  }

  increaseQuantity(product: CartModel) {
    this.cartService.increaseQuantity(product);
  }

  decreaseQuantity(product: CartModel) {
    this.cartService.decreaseQuantity(product);
  }
  removeAll(){
    this.cartService.clearCart();
    window.alert("Removed All !!! ");
  }

  getTotalItems(): number{
    return this.cartService.totalItems;
  }

  getTotalCartAmount(): number {
    return this.cartService.totalCartAmount;
  }
}