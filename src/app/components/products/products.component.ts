import { Component, OnInit } from '@angular/core';
// import { productsSchema } from 'src/app/interfaces/productInterface';
import { ProductsDataService } from 'src/app/services/products-data.service';
import { ProductSchema } from 'src/app/models/MProduct-model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  // data: any;
  productsData: ProductSchema[] = [];
  constructor(private productDataService: ProductsDataService) { }

  ngOnInit(): void {
    this.productDataService.getProducts().subscribe(
      (res: any) => {
        console.log(res.products);
        res.products.forEach((item: any) => {
          this.productsData.push(new ProductSchema(
            item.id.toString(),
            item.brand,
            item.description,
            item.rating.toString(),
            item.price,
            item.discountPercentage,
            item.stock,
            item.thumbnail,
            item.returnPolicy,
            item.availabilityStatus,
            item?.images[0] || '',
            // ? is a optional chaining operator
            item?.images[1] || '',
            item?.images[2] || '',
            item?.images[3] || '',
            ["l","xl","xxl"]
          ));
        });
        // this.productsData = [];
        // for (let item of res.products) {
        //   this.productsData.push(this.transformToProductSchema(item));
        // }
        console.log(this.productsData);
      },
      error => {
        console.error('Error fetching data', error);
      }
    );
  }

  // private transformToProductSchema(item: any): productsSchema {
  //   return {
  //     id: item.id.toString(),
  //     brand_name: item.brand,
  //     description: item.description,
  //     rating: item.rating.toString(),
  //     price: item.price,
  //     discount: item.discountPercentage,
  //     image_url1: item?.images[0] || '',
  //     // ? is a optional chaining operator
  //     image_url2: item?.images[1] || '',
  //     image_url3: item?.images[2] || '',
  //     image_url4: item?.images[3] || '',
  //     size: []
  //   };
  // }

  showPopup: boolean = false;
  selectedProduct!: ProductSchema;
  //  ! is known as the non-null assertion operator

  showProductDescription(product: ProductSchema): void {
    this.showPopup = true;
    this.selectedProduct = product;
  }

  hideProductDescription(): void {
    this.showPopup = false;
  }

  // getPrice(price: number, discount: number) {
  //   return price - price * (discount / 100);
  // } 

}
