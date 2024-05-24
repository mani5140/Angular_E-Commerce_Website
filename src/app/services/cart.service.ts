import { Injectable } from '@angular/core';
import { productsSchema } from '../interfaces/productInterface';


interface CartItem {
  product: productsSchema;
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart: CartItem[] = [];

  addToCart(product: productsSchema) {
    const existingItem = this.cart.find(item => item.product.id === product.id);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      this.cart.push({ product, quantity: 1 });
    }
  }

  getCartItems(): CartItem[] {
    return this.cart;
  }

  increaseQuantity(product: productsSchema) {
    const item = this.cart.find(item => item.product.id === product.id);
    if (item) {
      item.quantity += 1;
    }
  }

  decreaseQuantity(product: productsSchema) {
    const item = this.cart.find(item => item.product.id === product.id);
    if (item && item.quantity > 1) {
      item.quantity -= 1;
    } else if (item) {
      this.removeItem(product);
    }
  }

  removeItem(product: productsSchema) {
    this.cart = this.cart.filter(item => item.product.id !== product.id);
  }

  clearCart() {
    this.cart = [];
  }
}
