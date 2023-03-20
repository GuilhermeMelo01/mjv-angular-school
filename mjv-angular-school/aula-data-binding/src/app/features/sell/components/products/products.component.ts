import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  titulo = "Tela de produtos!"

  produto = {
    descricao: "Playstation 5",
    preco: 4500,
    quantidade: 1,
    img: "https://gmedia.playstation.com/is/image/SIEPDC/ps5-product-thumbnail-01-en-14sep21"
  }

  constructor() { }

  ngOnInit(): void {
  }

  precoComDesconto(preco: number): number {
    return preco * 0.90;
  }

}
