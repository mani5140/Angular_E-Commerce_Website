import { Injectable } from '@angular/core';
// import { ProductSchema } from '../interfaces/productInterface';
// import { cartSchema } from '../interfaces/cartInterface';
import { ProductSchema } from '../models/MProduct-model';
import { CartSchema } from '../models/MCart-model';

// ye interface cartSche
 

@Injectable({
  providedIn: 'root'
})
export class CartService {

  // private cart: CartItem[] = [];
  private cart: CartSchema[] = [];

  addToCart(product: ProductSchema) {
    const existingItem = this.cart.find(item => item.product.id === product.id);
    if (existingItem && existingItem.quantity + 1 <= product.stock) {
      existingItem.quantity += 1;
    } else if(!existingItem && product.stock >= 1){
      this.cart.push({ product, quantity: 1 });
    }
    else{
      window.alert("Out of stock !!! ")
    }
  }

  getCartItems(): CartSchema[] {
    return this.cart;
  }

  increaseQuantity(product: ProductSchema) {
    const item = this.cart.find(item => item.product.id === product.id);
    if (item && item.quantity + 1 <= product.stock) {
      item.quantity += 1;
    }
    else{
      window.alert("Out of stock !!! ")
    }
  }

  decreaseQuantity(product: ProductSchema) {
    const item = this.cart.find(item => item.product.id === product.id);
    if (item && item.quantity > 1) {
      item.quantity -= 1;
    } else if (item) {
      this.removeItem(product);
      window.alert("Product removed Successfully !!! ")
    }
  }

  removeItem(product: ProductSchema) {
    this.cart = this.cart.filter(item => item.product.id !== product.id);
  }

  clearCart() {
    this.cart = [];
  }
}
