import { Component,EventEmitter, Input, Output } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { ProductSchema } from 'src/app/models/MProduct-model';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css']
})
export class ProductDescriptionComponent {

  // getPrice(price: number,discount:number){
  //   return price - price*(discount/100);
  // }
  
  @Input() showPopup: boolean = false;
  @Input() selectedProduct!: ProductSchema;
  @Output() close: EventEmitter<any> = new EventEmitter<any>();

  constructor(private cartService: CartService) {}
  addToCart() {
    window.alert("Product added to cart !!!")
    this.cartService.addToCart(this.selectedProduct);
  }
  
}
