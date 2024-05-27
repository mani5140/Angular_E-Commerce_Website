import { ProductSchema } from "./MProduct-model";
export class CartSchema{
    product :ProductSchema;
    quantity : number;

    constructor(product:ProductSchema, quantity:number = 1){
        this.product = product,
        this.quantity = quantity
    }
}