import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import Product from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products$: Observable<Product[]>;
  products: Product[];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.list();
  }

  list(): void {
    this.productService.list().subscribe(data => {
      this.products = data;
      const buttonProperties = {
        buttonText: '',
        buttonColor: ''
      };
      this.products.map((products, index) => {
        if ((products.title === 'Student') || (products.title === 'Specialist')) {
          buttonProperties.buttonText = 'Em Breve';
          buttonProperties.buttonColor = '#878787';
        } else {
          buttonProperties.buttonText = 'Saiba Mais';
          buttonProperties.buttonColor = products.color;
        }
        this.products[index].buttonColor = buttonProperties.buttonColor;
        this.products[index].buttonText = buttonProperties.buttonText;
      });
    });
  }
}
