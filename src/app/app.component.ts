import { Component } from '@angular/core';
import { HomePageComponent } from './product/pages/home-page/home-page.component';
import { RouterOutlet } from '@angular/router';
import { ProductManagerComponent } from './product/components/product-manager/product-manager.component';

@Component({
  selector: 'app-root',
  imports: [HomePageComponent, ProductManagerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-tute';
  storeName = "My Angular Store";
}
