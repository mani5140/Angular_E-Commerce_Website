import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductsDataService } from 'src/app/services/products-data.service';
import { ProductModel } from 'src/app/models/product-model';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  createProductForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private productService: ProductsDataService,
    private router: Router
  ) {
    this.createProductForm = this.fb.group({
      brand: ['', Validators.required],
      description: ['', Validators.required],
      rating: ['', Validators.required],
      price: ['', Validators.required],
      discountPercentage: ['', Validators.required],
      stock: ['', Validators.required],
      thumbnail: ['', Validators.required],
      returnPolicy: ['', Validators.required],
      availabilityStatus: ['', Validators.required],
      images: [''],
    });
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (this.createProductForm.valid) {
      const newProduct = new ProductModel(
        "100",
        this.createProductForm.value.brand,
        this.createProductForm.value.description,
        this.createProductForm.value.rating,
        this.createProductForm.value.price,
        this.createProductForm.value.discountPercentage,
        this.createProductForm.value.stock,
        this.createProductForm.value.thumbnail,
        this.createProductForm.value.returnPolicy,
        this.createProductForm.value.availabilityStatus,
        this.createProductForm.value.images,
        this.createProductForm.value.images,
        this.createProductForm.value.images,
        this.createProductForm.value.images,
        ["l", "xl", "xxl"]
      );
      console.log(newProduct);
      this.productService.createProduct(newProduct);
      this.router.navigate(['/products']);  
    }
  }
}

