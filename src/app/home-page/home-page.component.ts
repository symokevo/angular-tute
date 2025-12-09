import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { CommonModule } from '@angular/common';
import { Product } from '../models/Product';
import { HighlightPriceDirective } from "../highlight-price.directive";
import { ConvertToKshPipe } from "../convert-to-ksh.pipe";

@Component({
  selector: 'app-home-page',
  imports: [CommonModule, HighlightPriceDirective, ConvertToKshPipe],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  products: Product[];

  constructor( productService: ProductService ) {
    productService.addProduct( new Product('Grapes', 2.0) );
    this.products = productService.getProducts();
  }

}
