import { Injectable } from '@angular/core';
import { ProductModel } from '../models/product-model';
import { CartModel } from '../models/cart-model';

// ye interface cartSche


@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart: CartModel[] = [];
  totalItems: number = 0;
  totalCartAmount: number = 0;

  addToCart(product: ProductModel) {
    const existingItem = this.cart.find(item => item.product.id === product.id);
    if (existingItem && existingItem.quantity + 1 <= product.stock) {
      existingItem.quantity += 1;
      existingItem.totalPrice += product.discountedPrice;
      this.totalItems += 1;
      this.totalCartAmount += product.discountedPrice;
    } else if (!existingItem && product.stock >= 1) {
      this.cart.push(
        new CartModel(product)
      );
      this.totalItems += 1;
      this.totalCartAmount += product.discountedPrice;
    }
    else {
      window.alert("Out of stock !!! ")
    }
  }

  getCartItems(): CartModel[] {
    return this.cart;
  }

  increaseQuantity(cartItem: CartModel) {
    if (cartItem && cartItem.quantity + 1 <= cartItem.product.stock) {
      cartItem.quantity += 1;
      cartItem.totalPrice += cartItem.product.discountedPrice;
      this.totalItems += 1;
      this.totalCartAmount += cartItem.product.discountedPrice;
    }
    else {
      window.alert("Out of stock !!! ")
    }
  }

  decreaseQuantity(cartItem: CartModel) {
    if (cartItem && cartItem.quantity > 1) {
      cartItem.quantity -= 1;
      cartItem.totalPrice -= cartItem.product.discountedPrice;
      this.totalItems -= 1;
      this.totalCartAmount -= cartItem.product.discountedPrice;

    } else if (cartItem) {
      this.removeItem(cartItem.product);
      this.totalItems -= 1;
      if(this.totalItems == 0){
        this.totalCartAmount = 0;
      }
      else{
        this.totalCartAmount -= cartItem.product.discountedPrice;
      }
      window.alert("Product removed Successfully !!! ")
    }
  }

  removeItem(product: ProductModel) {
    // this.cart = this.cart.filter(item => item.product.id !== product.id);
    this.cart.map((a: CartModel, index: number) => {
      if (product.id === a.product.id) {
        this.cart.splice(index, 1);
      }
    });
  }

  clearCart() {
    this.cart = [];
    window.location.reload();
  }
}
