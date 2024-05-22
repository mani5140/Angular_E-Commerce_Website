import { Component } from '@angular/core';
import { products_details } from 'src/app/interfaces/productInterface';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  getPrice(price: number, discount: number) {
    return price - price * (discount / 100);
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
    },
    {
      id: "2",
      brand_name: "Nike",
      description: "Nike Air Zoom Pegasus 38 Running Shoes",
      rating: "4.8",
      price: 1200,
      discount: 15,
      image_url1: "assets/images/pic1.jpg",
      image_url2: "assets/images/pic1.jpg",
      image_url3: "assets/images/pic1.jpg",
      image_url4: "assets/images/pic1.jpg",
      size: ["8", "9", "10", "11"]
    },
    {
      id: "3",
      brand_name: "Adidas",
      description: "Adidas Men Black Solid Hoodie",
      rating: "4.5",
      price: 800,
      discount: 25,
      image_url1: "assets/images/pic1.jpg",
      image_url2: "assets/images/pic1.jpg",
      image_url3: "assets/images/pic1.jpg",
      image_url4: "assets/images/pic1.jpg",
      size: ["M", "L", "XL", "XXL"]
    },
    {
      id: "4",
      brand_name: "Levi's",
      description: "Levi's 511 Slim Fit Jeans",
      rating: "4.7",
      price: 1500,
      discount: 10,
      image_url1: "assets/images/pic1.jpg",
      image_url2: "assets/images/pic1.jpg",
      image_url3: "assets/images/pic1.jpg",
      image_url4: "assets/images/pic1.jpg",
      size: ["30", "32", "34", "36"]
    },
    {
      id: "5",
      brand_name: "Puma",
      description: "Puma Men's Sports T-shirt",
      rating: "4.3",
      price: 600,
      discount: 30,
      image_url1: "assets/images/pic1.jpg",
      image_url2: "assets/images/pic1.jpg",
      image_url3: "assets/images/pic1.jpg",
      image_url4: "assets/images/pic1.jpg",
      size: ["S", "M", "L", "XL"]
    },
    {
      id: "6",
      brand_name: "Under Armour",
      description: "Under Armour Men's Track Jacket",
      rating: "4.6",
      price: 1100,
      discount: 22,
      image_url1: "assets/images/pic1.jpg",
      image_url2: "assets/images/pic1.jpg",
      image_url3: "assets/images/pic1.jpg",
      image_url4: "assets/images/pic1.jpg",
      size: ["M", "L", "XL"]
    },
    {
      id: "7",
      brand_name: "Tommy Hilfiger",
      description: "Tommy Hilfiger Classic Polo Shirt",
      rating: "4.4",
      price: 700,
      discount: 18,
      image_url1: "assets/images/pic1.jpg",
      image_url2: "assets/images/pic1.jpg",
      image_url3: "assets/images/pic1.jpg",
      image_url4: "assets/images/pic1.jpg",
      size: ["S", "M", "L", "XL"]
    },
    {
      id: "8",
      brand_name: "H&M",
      description: "H&M Men's Slim Fit Suit Pants",
      rating: "4.2",
      price: 1300,
      discount: 20,
      image_url1: "assets/images/pic1.jpg",
      image_url2: "assets/images/pic1.jpg",
      image_url3: "assets/images/pic1.jpg",
      image_url4: "assets/images/pic1.jpg",
      size: ["30", "32", "34", "36"]
    },
    {
      id: "9",
      brand_name: "Reebok",
      description: "Reebok Training Essentials Linear Logo Joggers",
      rating: "4.0",
      price: 900,
      discount: 25,
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
}
