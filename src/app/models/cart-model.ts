import { ProductModel } from "./product-model";
export class CartModel{
    product :ProductModel;
    quantity : number;
    totalPrice : number;

    constructor(product:ProductModel, quantity:number = 1){
        this.product = product,
        this.quantity = quantity,
        this.totalPrice = product.discountedPrice
    }
}