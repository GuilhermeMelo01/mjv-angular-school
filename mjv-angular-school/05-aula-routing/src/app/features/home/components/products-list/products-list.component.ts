import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product-model';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  products: Array<Product>= [
      {
        id: 1,
        description: 'iPhone 10',
        price: 2000
      },
      {
        id: 2,
        description: 'iPhone 11',
        price: 4000
      },
      {
        id: 3,
        description: 'iPhone 12',
        price: 6000
      }
  ];

  constructor(){}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
