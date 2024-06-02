import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';
import { CartPageComponent } from './components/cart-page/cart-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ProductsComponent } from './components/products/products.component';
import { CreateProductComponent } from './components/admin-components/create-product/create-product.component';
import { UpdateProductComponent } from './components/admin-components/update-product/update-product.component';

const routes: Routes = [
  {
    component: AboutPageComponent,
    path: 'about'
  },
  {
    component: ContactPageComponent,
    path: 'contact'
  },
  {
    component: CartPageComponent,
    path: 'cart'
  },
  {
    component: HomePageComponent,
    path: ''
  },
  {
    component: ProductsComponent,
    path: 'products'
  },
  { component: CreateProductComponent, path: 'create'},
  { component: UpdateProductComponent,path: 'update'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
