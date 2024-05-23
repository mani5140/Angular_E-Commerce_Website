import { Component, OnInit } from '@angular/core';
import { products_details } from 'src/app/interfaces/productInterface';
import { ProductsDataService } from 'src/app/services/products-data.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  
  data: any;

  constructor(private productsData: ProductsDataService) { }

  ngOnInit(): void {
    this.productsData.getProducts().subscribe(
      response => {
        this.data = response;
        console.log(this.data);
      },
      error => {
        console.error('Error fetching data', error);
      }
    );
  }


  products_details: products_details[] = [
    {
      id: "1",
      brand_name: "Roadster",
      description: "Men White Classic Regular Fit Cotton Casual Shirt",
      rating: "4.1",
      price: 500,
      discount: 20,
      image_url1: "assets/images/pic1.jpg",
      image_url2: "assets/images/pic1.jpg",
      image_url3: "assets/images/pic1.jpg",
      image_url4: "assets/images/pic1.jpg",
      size: ["S", "M", "L", "XL"]
    }
  ];


  showPopup: boolean = false;
  selectedProduct: any;

  showProductDescription(product: any): void {
    this.showPopup = true;
    this.selectedProduct = product;
  }

  hideProductDescription(): void {
    this.showPopup = false;
  }

  getPrice(price: number, discount: number) {
    return price - price * (discount / 100);
  }

 

}
