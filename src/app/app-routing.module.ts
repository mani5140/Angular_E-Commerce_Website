import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';
import { CartPageComponent } from './components/cart-page/cart-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ProductsComponent } from './components/products/products.component';

const routes: Routes = [
  {
    component:AboutPageComponent,
    path: 'about'
  },
  {
    component:ContactPageComponent,
    path: 'contact'
  },
  {
    component:CartPageComponent,
    path: 'cart'
  },
  {
    component:HomePageComponent,
    path: ''
  },
  {
    component:ProductsComponent,
    path: 'products'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
