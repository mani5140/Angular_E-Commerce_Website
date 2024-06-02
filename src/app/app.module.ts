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
import { RouterModule } from '@angular/router';
import { CreateProductComponent } from './components/admin-components/create-product/create-product.component';
import { UpdateProductComponent } from './components/admin-components/update-product/update-product.component';
import { ProductsDataService } from './services/products-data.service';

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
    CreateProductComponent,
    UpdateProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([]),
  ],
  providers: [ProductsDataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
