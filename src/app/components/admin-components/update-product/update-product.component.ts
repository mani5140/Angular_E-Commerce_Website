import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsDataService } from 'src/app/services/products-data.service';
import { ProductModel } from 'src/app/models/product-model';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  updateProductForm: FormGroup;
  productId!: string;

  constructor(
    private fb: FormBuilder,
    private productService: ProductsDataService,
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
    // this.route.paramMap.subscribe(params => {
    //   this.productId = params.get('productId') || '';
    //   console.log(this.productId);
    //   if (this.productId) {
    //     this.productService.getProducts().subscribe(products => {
    //       const product = products.find(p => p.id === this.productId);
    //       if (product) {
    //         this.updateProductForm.patchValue(product);
    //       }
    //     });
    //   }
    // });
    this.route.queryParams.subscribe(params => {
      this.setProductId(params['search'] || '');
    });
  }

  setProductId(id: string){
    this.productId = id;
    console.log(this.productId);
  }

  onSubmit(): void {  
    if (this.productId) {
      const updatedProduct = new ProductModel(
        this.productId,
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

      this.productService.updateProduct(updatedProduct);
      this.router.navigate(['/products']);
    }
  }
}
