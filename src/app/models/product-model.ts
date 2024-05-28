export class ProductModel {
    id: string;
    brand_name: string;
    description: string;
    rating: string;
    price: number;
    discount: number;
    stock: number;
    thumbnail?: string;
    returnPolicy?: string;
    availabilityStatus: string;
    image_url1?: string;
    image_url2?: string;
    image_url3?: string;
    image_url4?: string;
    size: string[];
    discountedPrice: number;
  
    constructor(
      id: string,
      brand_name: string,
      description: string,
      rating: string,
      price: number,
      discount: number,
      stock: number,
      thumbnail: string,
      returnPolicy: string = "",
      availabilityStatus: string = "",
      image_url1: string,
      image_url2: string,
      image_url3: string,
      image_url4: string,
      size: string[] = [],
      discountedPrice: number = 0
    ) {
      this.id = id;
      this.brand_name = brand_name;
      this.description = description;
      this.rating = rating;
      this.price = price;
      this.discount = discount;
      this.stock = stock;
      this.thumbnail = thumbnail;
      this.returnPolicy = returnPolicy;
      this.availabilityStatus = availabilityStatus;
      this.image_url1 = image_url1;
      this.image_url2 = image_url2;
      this.image_url3 = image_url3;
      this.image_url4 = image_url4;
      this.size = size,
      this.discountedPrice = price - price * (discount / 100);
    }
    
  }
  