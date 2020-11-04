import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products: [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.list();
  }

  list(): void {
    this.productService.list().subscribe(products => {
      this.products = products;
    });
  }
}
