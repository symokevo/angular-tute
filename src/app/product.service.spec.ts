import { TestBed } from '@angular/core/testing';
import { ProductService } from './product.service';
import { Product } from './models/Product';

describe('ProductService', () => {
  let service: ProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return the list of products', () => {
    expect(service.getProducts()).toEqual([
      new Product('Apples', 1.2),
      new Product('Oranges', 0.8),
      new Product('Bananas', 1.5)
    ]);
  });
});
