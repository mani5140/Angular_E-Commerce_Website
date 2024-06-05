import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { ProductModel } from 'src/app/models/product-model';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  updateProductForm: FormGroup;
  product!: ProductModel;
  productIndex!: number;

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.updateProductForm = this.fb.group({
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
    this.route.queryParams.subscribe(params => {
      this.productIndex = params['productIndex'];
      this.product = JSON.parse(params['product']);
      console.log(this.product);
    });

    if(this.product){
      this.updateProductForm.patchValue({
      brand: this.product.brand_name,
      description: this.product.description,
      rating: this.product.rating,
      price: this.product.price,
      discountPercentage:  this.product.discount,
      stock: this.product.stock,
      thumbnail: this.product.thumbnail,
      returnPolicy: this.product.returnPolicy,
      availabilityStatus: this.product.availabilityStatus,
      images: [''],
      })
    }

  }

  onSubmit(): void {  
   
      const updatedProduct = new ProductModel(
        this.product.id,
        this.updateProductForm.value.brand,
        this.updateProductForm.value.description,
        this.updateProductForm.value.rating,
        this.updateProductForm.value.price,
        this.updateProductForm.value.discountPercentage,
        this.updateProductForm.value.stock,
        this.updateProductForm.value.thumbnail,
        this.updateProductForm.value.returnPolicy,
        this.updateProductForm.value.availabilityStatus,
        this.updateProductForm.value.images,
        this.updateProductForm.value.images,
        this.updateProductForm.value.images,
        this.updateProductForm.value.images,
        ["l", "xl", "xxl"]
      );

      this.productService.updateProduct(updatedProduct,this.productIndex);
      this.router.navigate(['/products']);
    }
  }

