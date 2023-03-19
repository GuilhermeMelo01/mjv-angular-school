import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  titulo = "Tela de produtos!"

  produto1 = {
    descricao: "Playstation 5",
    preco: 4500,
    quantidade: 2
  }

  constructor(){}

  ngOnInit(): void {

  }

}
