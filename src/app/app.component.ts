import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductsComponent } from './components/products/products.component';
import { ConceptsComponent } from './components/concepts/concepts.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'e-commerce';
}
