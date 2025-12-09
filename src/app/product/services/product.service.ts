import { Injectable } from '@angular/core';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[] = [
    new Product('Apples', 1.2),
    new Product('Oranges', 0.8),
    new Product('Bananas', 1.5)
  ]

  getProducts() {
    return this.products;
  }

  addProduct(product: Product) {
    this.products.push(product);
  }

  constructor() { }
}
