import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductDescriptionComponent } from './components/product-description/product-description.component';
import { ConceptsComponent } from './components/concepts/concepts.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { CartPageComponent } from './components/cart-page/cart-page.component';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { RouteReuseStrategy, RouterModule } from '@angular/router';
import { AdminComponent } from './components/admin-components/admin/admin.component';
import { CreateProductComponent } from './components/admin-components/create-product/create-product.component';
import { UpdateProductComponent } from './components/admin-components/update-product/update-product.component';
import { DeleteProductComponent } from './components/admin-components/delete-product/delete-product.component';
import { ProductsDataService } from './services/products-data.service';
import { CustomRouteReuseStrategy } from './custom-route-reuse-strategy';


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductDescriptionComponent,
    ConceptsComponent,
    CartPageComponent,
    AboutPageComponent,
    ContactPageComponent,
    NavbarComponent,
    HomePageComponent,
    AdminComponent,
    CreateProductComponent,
    UpdateProductComponent,
    DeleteProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: 'products', component: ProductsComponent }
    ])
  ],
  providers: [
    ProductsDataService,
    { provide: RouteReuseStrategy, useClass: CustomRouteReuseStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
