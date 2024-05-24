import { Component,EventEmitter, Input, Output } from '@angular/core';
import { productsSchema } from 'src/app/interfaces/productInterface';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css']
})
export class ProductDescriptionComponent {
  getPrice(price: number,discount:number){
    return price - price*(discount/100);
  }
  @Input() showPopup: boolean = false;
  @Input() selectedProduct!: productsSchema;
  @Output() close: EventEmitter<any> = new EventEmitter<any>();

  constructor(private cartService: CartService) {}

  // getPrice(price: number, discount: number) {
  //   return price - price * (discount / 100);
  // }

  addToCart() {
    window.alert("Product added to cart !!!")
    this.cartService.addToCart(this.selectedProduct);
  }
  
}
