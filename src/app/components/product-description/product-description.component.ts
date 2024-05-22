import { Component,EventEmitter, Input, Output } from '@angular/core';

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
  @Input() selectedProduct: any;
  @Output() close: EventEmitter<any> = new EventEmitter<any>();
}
