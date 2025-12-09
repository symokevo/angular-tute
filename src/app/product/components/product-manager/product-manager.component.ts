import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/Product';

@Component({
  selector: 'app-product-manager',
  imports: [],
  templateUrl: './product-manager.component.html',
  styleUrl: './product-manager.component.scss'
})
export class ProductManagerComponent {
  constructor(ProductService: ProductService) {
    ProductService.addProduct(new Product('Mangoes', 1.8));
  }
}
